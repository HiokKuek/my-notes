---
title: Decimal to Base-R conversion
draft: false
tags:
  - "#CS2100"
---

### Number Systems
The number system we are most used to is the decimal number system. However, there are other number systems, i.e. binary, octal, hexadecimal. 

In computers, data is internally represented as bits *binary digits*!
- 1 Byte = 8bit 
- n bits can represent $2^n$ values, to represent $m$ values, $log_2m$ bits are required.

### Decimal to Binary Conversion 
**Whole numbers to Binary**
- Use successive division by 2 until the quotient is 0. 
- The remainders form the answer, with the first remainder as the least significant bit (LSB) and the last as the most significant bit (MSB)
- e.g. $(43)_{10}$ -> 21R1 -> 10R1 -> 5R0 -> 2R1 -> 1R0 -> 0R1
	- Hence, in binary, 43 is 101011 

**Decimal Fractions to Binary**
- Use repeated multiplication by 2, until the fractional product is 0 
- The carried digits, produce the answer with the first carry as the MSB and the last as the LSB
- e.g. $(0.3125)_{10}$ -> 0.3125 x 2 = 0.625 C0 -> 0.625 x 2 = 1.25 C1 -> 0.25 x 2 = 0.5 C0 -> 0.5 x 2 = 1.0 C1
	- Hence, in binary, 0.3125 is 0.0101

**Conversion between Decimal and Other Bases**
- Similarly, we can convert between other bases to decimal with the methods described above. 
- In summary,
- Decimal to base-R
	- Whole numbers: repeated division-by-R
	- Fractions: repeated multiplication-by-R