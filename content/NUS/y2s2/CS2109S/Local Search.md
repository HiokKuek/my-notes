---
title: Local Search
draft: false
tags:
  - ai
---
# Local Search Algorithms

Local search algorithms operate on **complete candidate solutions** and attempt to **iteratively improve** them using local modifications.  
They do **not maintain a search tree or paths**, only the current state.

---

## Key Characteristics

- Uses **only the current state** (and sometimes a small set of states)
- Extremely **memory efficient**
- Suitable for **optimization problems**
- Often **incomplete** and **non-optimal**
- Works well in **very large or continuous** state spaces

---

## When to Use Local Search

Use local search when:
- Only the **final state** matters (not the path)
- State space is huge or infinite
- Problem is framed as maximizing or minimizing an objective function

Examples:
- N-Queens
- Traveling Salesman Problem (TSP)
- Scheduling and timetabling
- Resource allocation

---

## Evaluation / Objective Function

Local search uses an evaluation (fitness) function:

```
f(s) = quality of state s
``` 

Goal:
- **Maximize** f(s), or
- **Minimize** cost(s)

---

## Hill-Climbing Search

**Idea:**  
Move to a neighboring state with a **better evaluation value**.

### Variants
- **Simple hill climbing:** move to first better neighbor
- **Steepest-ascent hill climbing:** move to best neighbor
- **Stochastic hill climbing:** randomly choose among better neighbors

### Properties
- **Complete:** No
- **Optimal:** No
- **Space Complexity:** O(1)

### Common Problems
- Local maxima
- Plateaus
- Ridges

---

## Simulated Annealing

**Idea:**  
Occasionally accept worse states to **escape local optima**.

### Acceptance Probability

$$
P = e^{(-ΔE / T)}
$$

- ΔE = decrease in quality
- T = temperature (gradually reduced)

### Properties
- **Complete:** Yes (with slow enough cooling schedule)
- **Optimal:** Yes (in theory)
- **Space Complexity:** O(1)

---

## Local Beam Search

**Idea:**  
Maintain **k states** at each iteration.

Steps:
1. Expand all k states
2. Collect all successors
3. Keep the best k successors

### Properties
- **Complete:** No
- **Optimal:** No
- **Space Complexity:** O(k)

---

## Stochastic Beam Search

**Idea:**  
Like beam search, but successors are chosen **probabilistically** based on fitness.

- Maintains diversity
- Reduces premature convergence

---

## Genetic Algorithms

**Idea:**  
Search using a **population of solutions** evolved over time.

### Core Components
- Population
- Fitness function
- Selection
- Crossover
- Mutation

### Properties
- **Complete:** No
- **Optimal:** No (but often finds good solutions)
- Highly parallelizable

---

## Common Issues in Local Search

- **Local maxima / minima**
- **Plateaus** (flat regions)
- **Ridges** (narrow paths requiring sideways moves)

---

## Techniques to Escape Local Optima

- Random restarts
- Simulated annealing
- Stochastic moves
- Population-based methods

---

## Comparison with Systematic Search

| Aspect | Local Search | Systematic Search |
|------|-------------|------------------|
| Memory | Very low | High |
| Path stored | No | Yes |
| Optimality | Not guaranteed | Often guaranteed |
| Scalability | Excellent | Poor |

---

## Key Takeaways

- Local search improves **states**, not paths
- Very low memory usage
- Best suited for **optimization problems**
- Trades guarantees for scalability

---

## Key Terms

- **Neighbor:** State reachable via small change
- **Local optimum:** Better than all neighbors, but not global
- **Plateau:** Flat evaluation region
- **Fitness function:** Measures solution quality
