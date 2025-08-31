---
title: Notes on Memory
draft: false
tags:
  - "#CS2100"
  - "#Recitation"
---
 
If memory is an array of bytes (abstract concept), yet the integer is 4 bytes. Do i store it starting with the least significant byte, or the most significant byte? 
>[!info] 
>MIPS can be either, but the common and original convention for most MIPS implementations is big-endian. That means when you store a 32-bit integer (4 bytes) into memory, the most significant byte (MSB) goes into the lowest-address byte, and the least significant byte (LSB) goes into the highest-address byte. 
>![[Pasted image 20250831155201.png]] 

