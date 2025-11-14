---
title: Pipelining
draft: false
tags:
---
# Stages 
- Five execution stages
	- IF: instruction fetch
	- ID: Instruction Decode and Register Read 
	- EX: Execute an operation or calculate an address
	- MEM: Access an operand in data memory 
	- WB: Write back the result into a register 
- Idea: 
	- Each execution stage takes 1 clock cycle 
	- General flow of data is from one stage to the next 
- Exceptions 
	- Update of PC and write back of register file