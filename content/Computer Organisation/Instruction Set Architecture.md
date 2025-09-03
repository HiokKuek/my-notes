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

#### Memory Addressing ModesS
#### Operations in the Instruction Set 
#### Instruction Formats
#### Encoding the Instruction Set 