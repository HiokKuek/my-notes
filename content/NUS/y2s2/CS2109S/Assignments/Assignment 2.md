---
title: Assignment 2 - CS2109s
draft: false
tags:
  - ai
  - localsearch
---
# Task 1: Tackling TSP with local search 
We were tasked to tackle the Travelling Salesperson Problem in the first task of the assignment. This problem is a classic NP-hard optimisation problem. Consider that there are n different cities, if we were to use bfs/ dfs to find the path that gives us the optimal route, we would have to compare (n-1)!/2 different routes and return the route that gives us the minimum distance/ cost. Therefore, the problem would not return a result within a reasonable period of time if we use [[Uninformed Search]] or [[A* Search]]. 


### What I have learnt 🔥
- Insights into [[Local Search#Hill-Climbing Search|Hill Climbing Search]]
- Hill Climbing Search Algorithms requires a `evaluate(route)` and `successor(route)` function
- Optimisation of Hill Climbing Search: run it a few times (starting at random points) and output the route that has the highest evaluation value. 
	- This helps to ensure that the result you obtain is not stuck at a local maximum that is bad. 
