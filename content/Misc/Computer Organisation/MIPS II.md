---
title: MIPS (Part II)
draft: false
tags:
  - "#CS2100"
  - "#InstructionFormats"
  - "#Encodings"
---
Extension of [[MIPS]]
# Encoding
### Basics 
- Each MIPS instruction has a fixed-length of 32 bits 
- challenge: reduce complexity of processor design -> instruction encodings should be as regular as possible

### Classification
- Instructions are classified according to their operands 
- **R-Format**
	- Instructions which use 2 source registers and 1 destination register
	- e.g. `add, sub, and, or, nor, slt, etc`
	- `srl, sll` included (will not have rs register)
- **I-Format**
	- Instructions which use 1 source register, 1 immediate value and 1 destination register
	- `e.g. addi, andi, ori, slti, lw, sw, beq, bne`
- **J-format**
	- `j` instruction uses only one immediate value

### MIPS Reference Sheet 
![[MIPS_Reference_Data_page1.pdf]]
### R-Format
![[Pasted image 20250901164605.png]]
- opcode: type of instruction
	- partially specifies the instruction
	- **0 for all R-Format Instructions**
- rs: register source
- rt: target register (register that contains the second operand) 
	- `srl`, `sll` will use this field to store it's operands 
- rd: register destination
- shamt: shift amt (for shift operations)
	- set to 0 in all non-shift instructions
- funct: function call
	- combined with opcode exactly specifies the instruction

#### Example: Encoding to machine code 
Mips: `add $8, $9, $10`

|         | opcode | rs    | rt    | rd    | shamt | funt   |
| ------- | ------ | ----- | ----- | ----- | ----- | ------ |
| decimal | 0      | 9     | 10    | 8     | 0     | 32     |
| binary  | 000000 | 01001 | 01010 | 01000 | 00000 | 100000 |
which equates to 0x012A4020

### I-Format
- contains immediate values 

| opcode | rs    | rt    | immediate |
| ------ | ----- | ----- | --------- |
| 6bits  | 5bits | 5bits | 16bits    |
- total is still 32bits `
- no `funct` field, opcode will uniquely specify an instruction
- rs: source register 
- rt: register to receive the result
- immediate: treated as a signed integer (2's complement)
	- can represent up to $2^{16}$ different values
- This is why we cannot put 32-bit constants in the instruction: the instruction itself is 32-bit wide 

#### Example: Encoding to machine code 
MIPS: `addi $21, $22, -50`

|         | opcode | rs    | rt    | immediate            |
| ------- | ------ | ----- | ----- | -------------------- |
| decimal | 8      | 22    | 21    | -50                  |
| binary  | 001000 | 10110 | 10101 | 1111111111001110<br> |
which equates to 0x22D5FFCE 

`lw $9, 12($8)`
*** 12 would be immediate value 

#### Other I-Format Instructions 
`beq, bne`

New register: Program Counter (PC)
- a special register that keeps the address of the next instruction to be executed in the processor 
- Also uses the I-Format! 
- opcode: `beq`/ `bne`
- rs and rt speciy registers to compare
- immediate can't store address! 
	- immediate is 16 bits
	- address is 32 bits
- immediate: the number of words (multiplied by 4) to "jump over" 
	- PC = PC + n * 4
	- instructions are word-aligned
	- 2s complement 
	- 16 bit 
#### Branch Calculation for PC-Relative Addressing 
- If branch is not taken:   PC = PC + 4 (Address of the next instruction)
- if branch is taken = (PC + 4) + (immediate x 4)

#### Example Encoding for branch instructions 
![[Pasted image 20250901194048.png]]

|         | opcode | rs    | rt    | immediate            |
| ------- | ------ | ----- | ----- | -------------------- |
| decimal | 4      | 9     | 0     | 3                    |
| binary  | 000100 | 01001 | 00000 | 0000000000000011<br> |

### J-Format 
- for branches, PC-relative addressing was used 
	- did not need to branch too far
- For general jumps(j)
	- we may jump to anywhere in memory 
- The ideal case is to specify a 32-bit memory address to jump to 
	- but instruction size is already 32-bit 😢

| opcode | target address |
| ------ | -------------- |
| 6bits  | 26bits         |
- we only have 26 bits of 32-bit address  
	- Optimisation: 
	- jumps are to word aligned addresses --> last 2 bits are always 00
	- therefore, we can specify 28bits of 32-bit address
- We cannot jump to anywhere in memory, but it should be sufficient **most of the time**

 **Summary: To build back 32 bits:** 
- First 4 bits: Take MSB of PC + 4
- Next 26 bits: As specified in target address
- last 2 bit: 00
#### Example
![[Pasted image 20250901201000.png]]

|         | opcode | target address   |
| ------- | ------ | ---------------- |
| decimal | 2      |                  |
| binary  | 000010 | 0000000000000010 |
### Addressing Modes 
- different ways to calculate the final address of the operands 

**Register Addressing**
- operand is a register 
- e.g. rs, rt

**Immediate Addressing**
- operand is a constant within the instruction itself 

**Base Addressing (displacement addressing)**
- operand is at the memory location whose address is sum of a register and a constant in the instruction
- displacement by number of bytes

**PC-relative addressing**
- address is sum of PC and constant in the instruction
- displacement by the number of address

**Pseudo-direct addressing**
- 26-bit of instruction concatenated with upper 4-bits of PC(j)


### Summary
![[Pasted image 20250901203806.png]]
- Branches use PC-relative addressing 
- Jumps use pseudo-direct addressing

### Notes
Instruction encoding uses register numbers. See [[MIPS#Registers]]
$s0 -> 16
$s1 -> 17