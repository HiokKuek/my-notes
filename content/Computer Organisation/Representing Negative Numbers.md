---
title: Representing Negative Numbers
draft: false
tags:
  - CS2100
---
The issue with the binary system is that there is no way to represent negative numbers, here we will introduce 3 systems designed to solve that problem: 
1. Sign-and Magnitude 
2. 1s Complement
3. 2s Complement

### Signed-and-Magnitude
Use the first bit to represent the sign.
- 0 for + (positive)
- 1 for - (negative)
For example, 
- 00110100 represents 52
- 10110100 represents -52

Given n-bits, the range of value it can represent is: $[-(2^{n-1} - 1),2^{n-1}-1]$


### 1s Complement
- Represent the negation of a positive binary value as $-x = 2^n -x -1$
- Or, can think of it as "flipping" the binary numbers around
- e.g. negation of 00001100 is 11110011, representing 1210 and -1210 respectively

Given n-bits, the range of value it can represent is: $[-(2^{n-1} - 1),2^{n-1}-1]$


### 2s Complement
- Represent the negation of a positive binary value as $-x = 2^n -x$
- Or, can think of it as "flipping" the binary numbers around, then add 1
	- Alternatively, (from LSB to MSB), copy the numbers to the first 1, and invert the rest. 
- e.g. negation of 00001100 is 11110100, representing 1210 and -1210 respectively 

Given n-bits, the range of value it can represent is: $[-(2^{n-1}),2^{n-1}-1]$


> [!Note]
> You can also extend the idea of complement on fractions! 



  
