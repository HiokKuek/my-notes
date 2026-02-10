---
title: Lecture 3 - CS2109s
draft: true
tags:
---
# Local and Adversarial Search 

### Recall 
- There are many difficult search and optimisation problems, e.g.
	- Combinatorial optimisation problems: travelling salesperson problem 
	- constraint satisfaction problems: graph colouring problem
	- continuous optimisation problems: non-linear 
- You may want to consider solving these problems with systematic approaches: bfs/ dfs
	- is however not solvable within a reasonable amount of time 
### Local search 
Traverse the state space by considering only the best locally-reachable state
- incomplete and suboptimal
- anytime property
	- means, given a longer runtime, there is often a better solution
	- but can obtain a "good enough" solution

#### Problem formulation
- states
- initial state
- goal test (optional): check if a current state is the desired solution
- successor function: a function that generates neighbouring states by applying modifications to the current state

Local state can actually be used to potentially find a good solution to the shortest path problem 
- depends on problem formulation 
- e.g. the states are all the possible paths, successor function will be used to generate valid paths

#### Evaluation function
- function used to estimate the "goodness" of a solution (current state)
- In the n-queens problem, an evaluation function can be the number of "dafe" queens

#### Hill climbing Algorithm
![[Pasted image 20260127162727.png]]
- steepest ascent search, greedy local search 
- At the current state you look at the eval(successor states). 
- You then move to the state which has the best eval(successor state) until you find a state that does not have a successor with a better eval(..) value. 

**Terminologies**
- `Global Maximum:` The overall highest point or solution across the entire state space that represents the optimal solution.
- `Shoulder`: Hard for the algorithm to move past this state


### Turn-Taking Games
- The next state of the environment depends on 
	- our action 
	- the action of the other agent
- e.g. tic tac toe

### Designing an Agent 
for competitive multi-agent problems 
- Chess:
	- fully observable 
	- deterministic
	- discrete
	- no infinite runs 
	- two-players zero-sum 
	- turn-taking


### Adversarial Search
#### Problem Formulation 
 - states
- Initial state
- Terminal States: state where the game ends
- Actions
- Transition 
- Utility Function: output the value of a state from the perspective of our agent 
	- our agent wants to maximise the utility 

#### Example - stick game 
- two piles of sticks (green and orange)
- player can take any number of sticks from a single pile 
- the player who cannot make any moves loses 

**Problem formulation**
- states: configuration of piles 
- initial state: number of green sticks and oragne sticks
- terminal state: no stick
- Actions: take 1, 2, ... sticks from one of the piles 
- Transition: Remove sticks from the pile 
- Utility function: +1, 0, -1 for win, draw, lose, respectively 


#### Minimax  (Revise)
Algorithm for two-player zero-sum game 
- Assumes that all players play optimally

Take on the view of player A: 
- try to maximise the outcome of the game 

Algo will compute the outcome of the game in a depth-first manner 

Functions 
- expand(state): for each action, compute the next_state
	- returns a set of (action, next_state) pairs 
- terminal function 