---
title: A* Search
draft: false
tags:
  - "#ai"
  - "#heuristic"
  - "#admisible"
  - "#consistent"
---
 # A* Search Algorithm

A* is an **informed search algorithm** that uses both:
- The **cost to reach a node** so far, and
- A **heuristic estimate** of the cost to reach the goal

to guide the search efficiently toward the goal.

---

## Core Idea

A* evaluates nodes using the function:

f(n) = g(n) + h(n)

Where:
- `g(n)` = cost from the start node to `n`
- `h(n)` = heuristic estimate of the cheapest cost from `n` to a goal
- `f(n)` = estimated total cost of a solution path through `n`

The node with the **lowest `f(n)` value** is expanded first.

---

## Algorithm Outline

1. Initialize the **frontier** with the start node.
2. Set `g(start) = 0` and compute `f(start)`.
3. Loop until the frontier is empty:
   - Select the node with the smallest `f(n)`
   - If it satisfies the goal test, return the solution
   - Expand the node and generate successors
   - Update `g`, `h`, and `f` for each successor
   - Insert or update successors in the frontier

---

## Data Structures

- **Frontier (Open Set):** Priority queue ordered by `f(n)`
- **Explored Set (Closed Set):** Tracks expanded nodes to avoid re-expansion

---

## Heuristic Function `h(n)`

A heuristic estimates how close a node is to the goal.

### Admissible Heuristic
- Never overestimates the true cost to the goal
- Formally: `h(n) ≤ h*(n)` for all `n`

**Guarantee:**  
If `h` is admissible, A* is **optimal**.

---

### Consistent (Monotonic) Heuristic
- Satisfies the triangle inequality:
  
  h(n) ≤ c(n, n') + h(n')

- Ensures that `f(n)` values are non-decreasing along a path

**Guarantee:**  
If `h` is consistent, A* never needs to re-expand a node.
If `h` is consistent, A* is admissible.

---

## Properties of A*

| Property | Result |
|-------|-------|
| Complete | Yes (if step costs ≥ ε > 0) |
| Optimal | Yes (with admissible heuristic) |
| Time Complexity | Exponential in worst case |
| Space Complexity | Exponential |

---

## Relationship to Other Search Algorithms

- If `h(n) = 0` → A* becomes [[Uninformed Search#5. Uniform Cost Search (UCS)|Uniform Cost Search]]
- If `g(n) = 0` → A* becomes **Greedy Best-First Search**
- Better heuristics → fewer expanded nodes

---

## Practical Considerations

**Pros:**
- Very efficient with a good heuristic
- Guarantees optimal solutions
- Widely used (pathfinding, planning, games)

**Cons:**
- High memory usage
- Performance heavily depends on heuristic quality

---

## Common Heuristic Examples

- **Manhattan Distance** (grid-based movement)
- **Euclidean Distance** (continuous space)
- **Misplaced Tiles** (8-puzzle)
- **Manhattan Distance Sum** (sliding puzzles)

---

## Key Takeaways

- A* balances **actual cost** and **estimated future cost**
- Optimality depends entirely on the heuristic
- Trade-off: **speed vs memory**
- One of the most important search algorithms in AI

---

## Key Notation

- `g(n)` — path cost so far  
- `h(n)` — heuristic estimate to goal  
- `f(n)` — estimated total cost  
- `h*(n)` — true cost to goal
