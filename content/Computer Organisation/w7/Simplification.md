---
title: Simplification
draft: false
tags:
  - "#CS2100"
---
# Function Simplification 
### Why? 
- fewer logic gates
- cheaper, less power, faster

### Techniques
- Algebraic
- Karnaugh Maps 
- Quine-McCluskey

# Algebric Simplification
### Aim
Minimise
- number of literals (priority)
- number of terms

### Example 1
![[Pasted image 20251001204226.png]]

### Example 2
![[Pasted image 20251001204352.png]]


# Half Adder 
 - circuit that adds 2 single bits (X, Y) to produce a result of 2 bits (C, S). 
 - ![[Pasted image 20251001204736.png]]
 - In canonical form (sum of minterms):
	 - $C =X \cdot Y$
	 - $S = X' \cdot Y + X \cdot Y'$
		 - OR S can be thought of as the exclusive OR operation


# Gray Code/ Reflected binary code 
-  Unweighted 
- Only a single bit change from one code value to the next
- n bits -> $2^n$ values
-  Good for error detection
- ![[Pasted image 20251001205220.png]]
**Generating a 4-bit standard Gray code sequence**
- The "reflection" technique
- ![[Pasted image 20251001205709.png]]


# K-Maps 
### Introduction 
- Systematic method to obtain simplified sum-of-products (SOP) expression