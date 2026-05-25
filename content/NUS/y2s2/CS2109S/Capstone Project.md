---
title: CS2109 Capstone Project
draft: true
tags:
---


Constraints: 
![[Pasted image 20260408173937.png]]

## A* Search Implementation Spec — Grid Adventure V1 (Task 1)

### Overview

You are implementing an A* search to solve a grid-based game. The agent receives a fully structured `GridState` and must navigate from a start position to an exit, collecting all gems along the way. The environment is **fully observable, deterministic, and discrete** — so you can compute the entire action sequence upfront and replay it step-by-step.

The outer loop uses a **brute-force waypoint approach**: enumerate all orderings of gems (up to 5! = 120), run a chain of A* searches for each ordering, and execute the ordering with the lowest total cost.

---

### 1. State (Node) Representation

Each node in the A* search must be fully described by this tuple (must be hashable):

```python
State = (
    position,            # (row, col)
    health,              # int — agent dies if <= 0
    keys_held,           # int
    doors_opened,        # frozenset of (row, col)
    boots_remaining,     # int — 0 if inactive
    ghost_remaining,     # int — 0 if inactive
    shield_remaining,    # int — 0 if inactive
    powerup_positions,   # frozenset of (type, row, col) — not yet picked up
    box_positions,       # frozenset of (row, col)
    coin_positions,      # frozenset of (row, col) — not yet collected
)
```

**Note:** Gems are not tracked in the state. In the waypoint approach, each A* call has a single fixed target — gem collection order is managed by the outer permutation loop.

---

### 2. Actions (Edges)

|Action|Precondition|
|---|---|
|UP / DOWN / LEFT / RIGHT|Target tile is within bounds and passable (or wall if `ghost_remaining > 0`)|
|PICKUP|Agent is on the same tile as a key, power-up, or gem|
|USE|Agent is adjacent to a locked door (not in `doors_opened`) and `keys_held >= 1`|

---

### 3. Edge Costs (Weights)

|Action|Cost|Side Effects|
|---|---|---|
|Move to normal tile|3|—|
|Move to coin tile|1|Auto-collect coin; remove from `coin_positions`|
|Move to lava (no shield)|3|`health -= 2`; terminal if `health <= 0`|
|Move to lava (shield active)|3|`shield_remaining -= 1`|
|PICKUP key|3|`keys_held += 1`|
|PICKUP power-up|3|Increment relevant `_remaining` by 5; remove from `powerup_positions`|
|PICKUP gem|3|Goal condition reached (handled by outer waypoint loop)|
|USE key on door|3|`keys_held -= 1`; add door to `doors_opened`|

---

### 4. Transition Function

`transition(state, action) → new_state | INVALID | TERMINAL`

#### MOVE (UP / DOWN / LEFT / RIGHT)

```
1. Compute step1 = position + direction

2. Validate step1 — return INVALID if:
   - Out of bounds
   - Wall AND ghost_remaining == 0
   - step1 has a box AND box_target (step1 + direction) is out of bounds,
     a wall, or occupied by another box

3. Apply step1 effects:
   - Update position = step1
   - If box at step1: update box_positions
   - If coin at step1: auto-collect, remove from coin_positions, cost -= 2
   - If lava at step1:
       - If shield_remaining > 0: shield_remaining -= 1
       - Else: health -= 2; if health <= 0 → TERMINAL
   - Decrement boots_remaining and ghost_remaining by 1 if > 0

4. If boots were active this step (boots_remaining > 0 before decrement):
   - Compute step2 = step1 + direction
   - If step2 is valid: apply same effects, update position = step2,
     decrement boots_remaining and ghost_remaining by 1 if > 0
   - If step2 is INVALID: stay at step1 (partial boot move is allowed)
   - If step2 causes health <= 0: return TERMINAL

5. Total cost = 3, minus 2 for each coin tile landed on
```

#### PICKUP

```
1. Return INVALID if no key, power-up, or gem at current position

2. Apply effects:
   - Key: keys_held += 1
   - Boots: boots_remaining += 5; remove from powerup_positions
   - Ghost: ghost_remaining += 5; remove from powerup_positions
   - Shield: shield_remaining += 5; remove from powerup_positions
   - Gem: signal goal reached

3. Cost = 3
```

#### USE

```
1. Return INVALID if:
   - No adjacent locked door (not in doors_opened)
   - keys_held < 1

2. Apply effects:
   - keys_held -= 1
   - doors_opened = doors_opened ∪ {door_position}

3. Cost = 3
   (A separate MOVE action is then needed to pass through the door)
```

---

### 5. Goal Condition

```python
def is_goal(state, target):
    if target is a gem:
        # Reached gem tile AND explicitly picked it up
        return state.position == target.position and target not in state.powerup_positions
    else:  # exit
        return state.position == target
```

---

### 6. Heuristic

```python
from math import ceil

def heuristic(state, target):
    dist = abs(state.position[0] - target[0]) + abs(state.position[1] - target[1])
    if state.boots_remaining > 0:
        return ceil(dist / 2) * 3
    return dist * 3
```

This is **admissible** because:

- Each step costs at minimum 3 (coins can lower it, but are not guaranteed on the path)
- Manhattan distance is the minimum possible number of steps
- Boots halve the steps needed, so `ceil(dist/2) * 3` is still a lower bound

Coins and ghost are **intentionally ignored** in the heuristic — including them could cause overestimation and break admissibility.

---

### Assumptions

- **Keys and power-ups are not auto-picked up** — they require an explicit PICKUP action costing 3.
- **Coins are auto-picked up** on landing — no separate action needed.
- **Gems are not auto-picked up** — they require an explicit PICKUP action.
- **Boots allow a partial second step** — if the second tile is invalid, the agent stays at the first tile rather than the move being invalid entirely.
- **Any key opens any door** — no key-door type matching needed.
- **Doors are always locked initially** as per game constraints.
- **No overlapping entities in the initial state** — each cell has at most one non-floor entity.

---

### Shortcomings

1. **Waypoint independence assumption.** Running A* between pairs of waypoints assumes the sub-paths are roughly independent. In practice, keys or power-ups picked up in one sub-path carry over to the next, which is handled correctly by passing the resulting state forward. However, the cost of one ordering may be underestimated if a key needed mid-path in one ordering happens to be "on the way" in another — the brute-force approach handles this correctly but doesn't exploit it proactively.
    
2. **No coin optimisation.** The heuristic ignores coins entirely. The A* will not actively route through coins to minimise cost — it will only benefit from coins that happen to lie on the optimal path. A more sophisticated approach could try to route through dense coin clusters.
    
3. **State space explosion with power-ups.** Power-up durations are tracked as integers in the state, meaning two states at the same position but with `boots_remaining = 3` vs `boots_remaining = 2` are treated as distinct nodes. This significantly increases the number of states explored. A possible mitigation is to discretise or ignore power-up duration for the purposes of visited-state deduplication, at the cost of possibly revisiting some states.
    
4. **Gem ordering is naive O(n!)** Even though 5! = 120 is tractable, it doesn't scale. If the game ever increases the gem limit, this blows up immediately. A proper TSP solver or dynamic programming over subsets (bitmask DP) would be more robust.
    
5. **No replanning.** The plan is computed once and replayed blindly. Since the environment is deterministic this is fine, but if the game ever introduces stochastic elements, the agent would fail silently.

---
Here is the instruction draft for the AI agent:

---

## Fix: Explicit Step Cost Calculation in A*

### Problem

The current A* implementation derives step costs from score delta:

```python
step_cost = current_state.score - next_state.score
```

This is incorrect because:

1. **Coin tiles** — moving onto a coin tile should cost 1 (3 - 2), but score-delta derivation may not reflect this correctly.
2. **Win step** — the final move to the exit costs 0, but score-delta derivation may not reflect this correctly.

### Fix

Replace score-delta cost derivation with **explicit step cost calculation**:

```python
def _step_cost(self, current_state: GridState, action: Action, next_state: GridState) -> int:
    if next_state.win:
        return 0
    
    # Base cost is always 3
    cost = 3
    
    # Check if agent landed on a coin tile (coin auto-collected, reduces cost by 2)
    current_sig, _, _ = self._describe_state(current_state)
    next_sig, _, _ = self._describe_state(next_state)
    coins_collected = len(current_sig[9]) - len(next_sig[9])  # index 9 = coin_positions
    cost -= 2 * coins_collected
    
    return cost
```

Then replace the existing cost line in `_a_star`:

```python
# Remove this:
step_cost = current_state.score - next_state.score

# Replace with:
step_cost = self._step_cost(current_state, action, next_state)
```

Also remove the guard that discards negative step costs, since all valid step costs are now non-negative by construction:

```python
# Remove this guard entirely:
if step_cost < 0:
    continue
```

### Expected Outcome

- A* will correctly prefer paths through coin tiles since they genuinely cost 1 instead of 3.
- The win step will correctly cost 0, ensuring the final move to exit is not penalised.

---

Does this look good to you before I send it to the agent?

