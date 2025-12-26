---
title: Logic Circuits
draft: false
tags:
  - CS2100
---
# Logic Gates 
### Inverter (NOT Gate)
![[Pasted image 20250930154304.png]]

### AND Gate
![[Pasted image 20250930154332.png]]

### OR Gate
![[Pasted image 20250930154354.png]]

### NAND Gate
![[Pasted image 20250930154549.png]]
![[Pasted image 20250930154846.png]]

### NOR Gate
![[Pasted image 20250930154819.png]]
![[Pasted image 20250930154832.png]]

### XOR Gate
![[Pasted image 20250930154905.png]]

### XNOR Gate
![[Pasted image 20250930155002.png]]

# Logic Circuits 
- Contain logic gates 
- `Fan-in:` the number of inputs of a gate. 
	- Gates may have fan-in more than 2

Given a boolean expression, we may implement it as a logic circuit. 
e.g.  $F1 = x \cdot y \cdot z'$
- ![[Pasted image 20250930155305.png]]


# Universal Gates 
`AND/OR/NOT` gates are sufficient for building any Boolean function. 
- They are known as a **complete set of logic** 
- Other gates are used for:
	- Usefulness (e.g. XOR gate for parity bit generation)
	- Economical 
	- Self-sufficient (eg: NAND/ NOR gates)
### NAND Gate
- is also a complete set of logic
- Proof by building NOT/AND/OR using only NAND gates
	- $(x \cdot x)' = x'$ -> NOT operation achieved! 
	- ![[Pasted image 20250930160247.png]]
	- $((x \cdot y)' \cdot (x \cdot y)')' = x \cdot y$ ->  AND operation achieved!
	- ![[Pasted image 20250930160512.png]]
	- $((x \cdot x)' \cdot (y \cdot y)')' = x + y$ -> OR operation achieved!
	- ![[Pasted image 20250930160713.png]]

### NOR Gate
- is also a complete set of logic!
- ![[Pasted image 20250930160819.png]]


### SOP and NAND Circuits
- An SOP expression can be easily implemented using 
	- 2-level AND-OR circuit
	- ![[Pasted image 20250930161141.png]]
	- 2-level NAND circuit
	- ![[Pasted image 20250930161225.png]]

### POS and NOR Circuits 
- likewise, a POS expression can be easily implemented using 
	- e.g. $G = (A+B) \cdot (C'+D) \cdot E$
	- 2-level OR-AND circuit
	- ![[Pasted image 20250930161746.png]]
	- 2-level NOR circuit
	- ![[Pasted image 20250930161803.png]]

# Programming Logic Array (PLA)  
A programmable integrated circuit 
- implements sum-of-product circuits (allow multiple outputs)

2 Stages 
- AND gates = product terms
- OR gates = outputs 

**Example**
![[Pasted image 20250930162216.png]]
![[Pasted image 20250930162812.png]]

**Example: Combinational Circuit implementation in MIPS**
![[Pasted image 20250930162612.png]]

# Read only Memory (ROM)
- Similar to PLA 
	- Set of input (called addresses)
	- set of outputs 
	- programmable mapping between inputs and outputs 
- Fully decoded: able to implement any mapping
- In contrast, PLAs may not be able to implement a given mapping due to not having enough minterms.