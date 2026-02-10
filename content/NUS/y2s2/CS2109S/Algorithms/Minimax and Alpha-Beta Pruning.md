---
title: Minimax and Alpha-Beta Pruning
draft: false
tags:
  - ai
  - minimax
  - alpha-beta_pruning
---
# Minimax

## Problem Setting

- Used in **adversarial search** (e.g. two-player, zero-sum, perfect-information games)
- Players:
    - **MAX**: tries to maximize utility
    - **MIN**: tries to minimize utility
- Assumptions:
    - Both players play **optimally**
    - Finite game tree
    - Deterministic environment

---

## Core Idea

- MAX chooses the action that **maximizes the minimum payoff** assuming MIN responds optimally.
- Values are propagated **bottom-up** from terminal states.
    

---

## Definitions

- **State**: A game configuration
- **Action**: A legal move from a state
- **Terminal state**: Game over state
- **Utility function**: Numerical payoff at terminal states
- **Game tree**: Alternating MAX and MIN layers
    

---

## Minimax Value

- **Terminal node**:  
    `value(state) = utility(state)`
- **MAX node**:  
    `value(state) = max(value(successor))`
- **MIN node**:  
    `value(state) = min(value(successor))`

---

## Pseudocode (Value Computation)

```python
def max_value(state):
    if is_terminal(state):
        return utility(state)
    v = float("-inf")
    for s in successors(state):
        v = max(v, min_value(s))
    return v

def min_value(state):
    if is_terminal(state):
        return utility(state)
    v = float("inf") 
    for s in successors(state):
        v = min(v, max_value(s))
    return v
```

---

## Action Selection (Root Only)

```python
def minimax_decision(state):
    best_action = None
    best_value = float("-inf")
    for action, s in successors_with_actions(state):
        value = min_value(s)
        if value > best_value:
            best_value = value
            best_action = action
    return best_action
```

---

## Time & Space Complexity

- **Time**:  
    `O(b^d)`  
    where:
    - `b` = branching factor
    - `d` = depth of game tree
	
- **Space**:
    - `O(bd)` with DFS recursion
    - `O(b^d)` if full tree stored

---

## Limitations

- Exponential time complexity
- Impractical for large games without pruning
- Requires evaluation function for depth-limited search

---

# Alpha-Beta Pruning

## Motivation

- Optimizes minimax by **pruning branches that cannot affect the final decision**
- Produces **exactly the same result** as minimax
- Improves efficiency dramatically in practice

---

## Key Idea

- Track two bounds:
    - **α (alpha)**: best value MAX can guarantee so far
    - **β (beta)**: best value MIN can guarantee so far
- Prune when:
    ```
    α ≥ β
    ```

---

## Intuition

- MAX will never choose a move worse than α
- MIN will never allow a move better than β
- If a node cannot improve these bounds, stop exploring it

---

## Pseudocode

```python
def max_value(state, α, β):
    if is_terminal(state):
        return utility(state)
    v = -∞
    for s in successors(state):
        v = max(v, min_value(s, α, β))
        if v ≥ β:
            return v   # β-cutoff
        α = max(α, v)
    return v

def min_value(state, α, β):
    if is_terminal(state):
        return utility(state)
    v = +∞
    for s in successors(state):
        v = min(v, max_value(s, α, β))
        if v ≤ α:
            return v   # α-cutoff
        β = min(β, v)
    return v
```

---

## Pruning Conditions

- **β-cutoff (at MAX node)**:  
    `v ≥ β`
- **α-cutoff (at MIN node)**:  
    `v ≤ α`

---

## Performance

- **Worst case**:  
    `O(b^d)` (same as minimax)
- **Best case (perfect ordering)**:  
    `O(b^(d/2))`
- Effectively **doubles search depth**

---

## Move Ordering

- Alpha-beta is most effective when:
    - Best moves are explored first
- Common heuristics:
    - Use evaluation function
    - Iterative deepening
    - Domain-specific heuristics

---

## Properties

- Same optimal move as minimax
- Does **not** affect correctness
- Purely a performance optimization

---

## Common Exam Pitfalls

- ❌ Alpha-beta does **not** change minimax values
- ❌ Pruning does **not** require full tree evaluation
- ✅ Pruning depends on **node order**
- ✅ Alpha-beta works with **depth-limited minimax**

---

## One-Line Comparison

- **Minimax**: brute-force optimal play
- **Alpha-beta pruning**: minimax + intelligence