---
title: Instruction Set Architecture (ISA)
draft: false
tags:
  - "#CS2100"
---
### RISC vs CISC: The Famous Battle
There are two major design philosophies for ISA 
#### Complex Instruction Set Computer (CISC)
e.g. x86-21 (IA32)
- Single instruction to perform complex operations 
	- VAX Architecture had an instruction to multiply polynomials 
- Smaller program size as memory was premium 
- Complex implementation, no room for hardware optimization 
**Memory**
- Mixture of Register-Register and Register-Memory

#### Reduced Instruction Set Computer (RISC)
e.g. MIPS, ARM
- Keep the instruction set small and simple, makes it easier to build/ optimise hardware 
- Burden on software to combine simpler operations to implement high-level language statements
**Memory**
- Typically use Register-Register

### The 5 Concepts in ISA Design
#### Data Storage
Concerned with 
1. Where do we store operands so that we can perform computation? 
2. Where do we store computation results? 
3. How do we specify the operands? 

**Stack Architecture**
- Operands are implicitly on top of the stack

**Accumulator Architecture**
- One operand is implicitly in the accumulator (a special register)

**General-purpose register architecture**
- Only **explicit** operands
- Register-memory architecture 
- Register-register (load-store) architecture
- e.g. MIPS, DEC Alpha, ARM, M1, Arduino

**Memory-Memory Architecture**
- all operands in memory.

**Different Instructions for different Architecture**
![[Pasted image 20250903144220.png]]

#### Memory Addressing Modes
Given a k-bit address, the address space is of size $2^k$

The processor contains 
1. Memory Address Register
	- Stores the memory address
	- connected to k-bit address bus (uni-directional)
2. Memory Data Register
	- Stores the data from the address as defined in the Memory Address Register
	- connected to n-bit data bus (bi-directional)

**Endianness**
Order in which the bytes is stored in memory
1. Big-endian
	- Most Significant Byte store in the lowest address
	- e.g. MIPS
	- read from low -> high address
2. Little-endian
	- Most Significant Byte stored in the highest address
	- read from high -> low address
	
**Addressing Mode**
ways to specify and operand in an assembly language
 1. Register
	 - operand is in a register `add $t1, $t2, $t3`
 2. Immediate
	 - operand is specified in the instruction directly `addi $t1, $t2, 98`
3. Displacement 
	- operand is in memory with address calculated as Base + Offset
	- `lw $t1, 20($t2)`
	
The above are addressing modes in MIPs, there are other addressing modes as well. 
#### Operations in the Instruction Set 
Specify operations in an instruction set. Find out the frequently used instructions -> optimise
![[Pasted image 20250903161553.png]]
#### Instruction Formats
**Instruction Length**
1. Variable-length 
	- Allow for a more flexible (but complex) and compact instruction set
2. Fixed Length
	 - MIPS: 32-bit
	 - allow for easy fetch and decode

**Instruction Fields**
- Consist of opcode, operands 
	
- Out of the x-bits, need to divide the bits according to the instruction 
	- E.g. Look at [[MIPS II#R-Format]]
#### Encoding the Instruction Set 