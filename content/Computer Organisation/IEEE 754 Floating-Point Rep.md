---
title: IEEE 754 Floating-Point Rep
draft: false
tags:
  - CS2100
---
Convention to represent floating point numbers 

Contains: 
- sign
	- 0 for positive, 1 for negative
- exponent 
	- If exponent is 2, need to do the following for (32-bit): 
		- 2 + 127 = 129
		- Store 129 (as binary) in excess-127
- mantissa
	- is normalised, with an implicit leading bit 1
	- e.g. $110.12$ becomes $1.1012 * 2^2$ 
	- In the above example, only 1012 is stored in the mantissa field (since 1 is implicit!)

**Two Formats**
- Single Precision (32 bits)
	- 1-bit sign
	- 8-bit exponent (excess-127)
	- 23-bit mantissa
- Double Precision (64 bits)
	- 1-bit sign 
	- 11-bit exponent (excess 1023)
	- 52-bit mantissa


After getting the 32/64-bit representation, we may convert to hexadecimal to improve readability.