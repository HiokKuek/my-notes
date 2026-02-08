---
title: Uninformed Search
draft: false
tags:
  - ai
  - bfs
  - dfs
---
# Uninformed (Blind) Search Algorithms

Uninformed search algorithms explore the search space **without any domain-specific knowledge** about how close a state is to the goal. They rely only on:
- The problem definition
- Initial state
- Successor function
- Goal test
- Path cost (if applicable)

---

## 1. Breadth-First Search (BFS)

**Idea:**  
Explore the search tree **level by level**, expanding the shallowest nodes first.

**Data Structure:**  
Queue (FIFO)

**Properties:**
- **Complete:** Yes (if branching factor is finite)
- **Optimal:** Yes (if all step costs are equal)
- **Time Complexity:** Exponential
- **Space Complexity:** Exponential

**Pros:**
- Finds shortest path (in terms of number of steps)
- Simple and reliable

**Cons:**
- High memory usage
- Slow for deep solutions

---

## 2. Depth-First Search (DFS)

**Idea:**  
Explore as deep as possible along a branch before backtracking.

**Data Structure:**  
Stack (LIFO) or recursion

**Properties:**
- **Complete:** No (can get stuck in infinite paths)
- **Optimal:** No
- **Time Complexity:** Exponential
- **Space Complexity:** Polynomial (Only visit one path at any point of time.)

**Pros:**
- Low memory usage
- Easy to implement

**Cons:**
- May never find a solution
- Can return very poor solutions

---

## 3. Depth-Limited Search (DLS)

**Idea:**  
DFS with a predefined depth limit `l`.

**Data Structure:**  
Stack / recursion

**Properties:**
- **Complete:** Yes (if solution depth ≤ `l`)
- **Optimal:** No
- **Time Complexity:**  Same as DFS
- **Space Complexity:**  Same as DFS 

**Pros:**
- Prevents infinite descent
- Controlled memory usage

**Cons:**
- Requires choosing a good depth limit
- May miss solutions beyond the limit

---

## 4. Iterative Deepening Depth-First Search (IDDFS)

**Idea:**  
Repeatedly apply DLS with increasing depth limits (`0, 1, 2, ...`).

**Data Structure:**  
Stack / recursion

**Properties:**
- **Complete:** Yes
- **Optimal:** Yes (if step costs are equal)
- **Time Complexity:**  Same as DFS
- **Space Complexity:** Same as DFS 

**Pros:**
- Combines BFS completeness with DFS space efficiency
- Very commonly used

**Cons:**
- Repeated work at shallow depths

---

## 5. Uniform Cost Search (UCS)

**Idea:**  
Expand the node with the **lowest path cost** so far.

**Data Structure:**  
Priority Queue (min-heap)

**Properties:**
- **Complete:** Yes (if step costs ≥ ε > 0)
- **Optimal:** Yes
- **Time Complexity:** `O(b^{⌈C*/ε⌉})`
- **Space Complexity:** Same as time complexity

**Pros:**
- Handles varying step costs
- Guarantees optimal solution

**Cons:**
- Can be slow if costs are small
- High memory usage

**Notes:**
- If you perform UCS with but you use f(n) = c(n) + h(n) where h(n) is the heuristic function, it becomes [[A* Search]]
- ---

## 6. Bidirectional Search

**Idea:**  
Search simultaneously from the **start** and **goal** until the frontiers meet.

**Data Structure:**  
Two queues (typically BFS)

**Properties:**
- **Complete:** Yes
- **Optimal:** Yes (with BFS and equal costs)
- **Time Complexity:** `O(b^{d/2})`
- **Space Complexity:** `O(b^{d/2})`

**Pros:**
- Exponentially faster than BFS
- Efficient for large search spaces

**Cons:**
- Requires ability to generate predecessors
- Hard to implement for many problems

---

## Summary Table

| Algorithm | Complete | Optimal | Time | Space |
|--------|----------|---------|------|-------|
| BFS | Yes | Yes* | `O(b^d)` | `O(b^d)` |
| DFS | No | No | `O(b^m)` | `O(bm)` |
| DLS | Yes* | No | `O(b^l)` | `O(bl)` |
| IDDFS | Yes | Yes* | `O(b^d)` | `O(bd)` |
| UCS | Yes | Yes | Exponential | Exponential |
| Bidirectional | Yes | Yes* | `O(b^{d/2})` | `O(b^{d/2})` |

\* Optimal only when step costs are equal.

---

## Key Notation

- `b` — branching factor  
- `d` — depth of shallowest goal  
- `m` — maximum depth of the search tree  
- `l` — depth limit  
- `C*` — optimal solution cost  
- `ε` — minimum step cost
 