---
title: MIPS (Part I)
draft: false
tags:
  - "#CS2100"
---

### Microprocessor without Interlocked Pipeline Stages (MIPS)

Programming Language --(compiled)--> Assembly Language --(Assembler)--> Machine Language --> Processor (MIPS)

### Instruction Set Architecture 
Abstraction on the interface between the hardware and the low-level software 
-  ISA contains the set of instruction that the processor can support.
- E.g. it is a manual for the processor. 


### Machine Code vs Assembly Language

| Machine Code                                                       | Assembly Language                                                   |
| ------------------------------------------------------------------ | ------------------------------------------------------------------- |
| Instructions in Binary                                             | Human readable                                                      |
| Hard and tedious to code                                           | Easier to write than machine code, symbolic version of machine code |
| May also be written in hexadecimal of a more human-readable format | May provide 'psuedo-instructions' as synthetic sugar                |
#### Walkthrough of C Code --> Assembly Code
```c
for (i=1; i<10; i++) {
	res = res + 1;
}
```
Compiles to (not real assembly languagea)
```
res <- res + 1
i <- i + 1
if i < 10, repeat
```

### Walkthrough of Components
![[Pasted image 20250829111841.png]]
- Code and data reside in memory 
- Transferred into the processor during execution
- **Problem:** Processor is always much faster than the memory.
- Hence, temporary storage for values in the processor: **registers**
	- load: move data from memory into register
	- store: move data from register into memory
- 3 Type of instructions
	- Memory: Move values between memory and register 
	- Calculation: Arithmetic  
	- Control Flow: Change the sequential execution 

### Registers 
- Fast memories in processor 
- A typical architecture has 16 to 32 registers 
- They do not have data type 
- Machine instruction assumes that data in register is of the correct type 
	- add (signed numbers): 32-bit 2's
	- addu (unisigned numbrs): 32-bit unsigned binary
	- fadd (floating point): IEE-754
- There are 32 registers in a MIPS Processor
- ![[Pasted image 20250829112924.png]]
	- even if u assign the value 5 to register 0, the value will be stored as 0
	- should not change/ touch registers 28-31

### MIPS Assembly Language 
Each instruction executes a simple command 
```asm
add $s0, $s1, $s2
```
- MIPS Arithmetic operations have 3 operands: 2 sources and 1 destination
	- $s0 is the destination (gets the result)
	- $s1 and $s2 are the sources 
	- add is the operation
- C Statement -> MIPS Assembly language is known as **variable mapping**
	- Variables are mapped to the registers

###   Arithmetic Operations 
**Addition**
```asm
add $s0, $s1, $s2
```
**Subtraction**
```asm
sub $s0, $s1, $s2
```
**Complex C Code -> MIPS**
```c
a = b + c - d;
```
- $s0 -> a, $s1 -> b, $s2 -> c, $s3 -> d
```
add $t0, $s1, $s2
sub $s0, $t0, $s3
```
- Use $t0 to $t7 for intermediate results
**Addition of constant values**
```
addi $s0, $s0, 4
```
- e.g. c code `a = a + 4`
- Immediate values are numerical constants 
- Constant ranges from $-2^{15}$ to $2^{15} - 1$
	- 16-bit 2s complement number system
- `subi` does not exist because you can use `addi` with a negative constant 
- minimize the number of instructions
**Register Zero, $0 or $zero**
- Used for initialisation 
- e.g. c code :`f = g` or `f = g + 0`
- MIPS Assembly Code: `add $s0, $s1, $zero`
- Known as **pseudo-instruction (move)**
	- e.g. `move $s0, $s1` is actually the MIPS Assembly Code as shown above. 
	- CS2100 will try to avoid pseudo-instruction
	
### Logical Operations 
![[Pasted image 20250829115015.png]]
AND
- 1 if both a and b are 1. Otherwise, 0
OR
- 0 if BOTH a and b are 0. Otherwise, 1
NOR
- 1 if BOTH a and b are 0. Otherwise, 0
XOR
- 1 if a is not the same as b. 

**Shifting**
`sll`: move all the bits in a word to the left by a number of positions 
$s0: `1011 1000 0000 0000 0000 0000 0000 1001`
```
sll $t2, $s0, 4
```
$t2: `1000 0000 0000 0000 0000 0000 1001 0000`
- the emptied positions are filled with 0s 
- Maximum number of shifts you can do is 31

`srl`: move all the bits in a word to the right by a number of positions 
- same logic as `sll`

Equivalent Number of bits for `sll` /`srl`
- `sll`: multiply by $2^n$ where $n$ represents the number of bits shifted to the left
- `srl`: division by $2^n$ where $n$ represents the number of bits shifted to the left

Bitwise AND
![[Pasted image 20250829115934.png]]
```
and $t0, $t1, $t2
```
- you can put `1111` in the positions you are interested in for $t2
- therefore, the output, $t0 will copy over the interested position of $t1
- you are using $t2 as a mask
- Masking operation! 
- has `andi` instruction
```
andi $t0, $t1, 0xFFF
```
- Mask over the last 12 bits  of $t1

Bitwise OR
- force certain bits to 1 
- `ori` is available
- ![[Pasted image 20250829120354.png]]
```
ori $t0, t1, 0xFFF
```
- `$t0`: 0000 1001 1100 0011 0101 1111 1111 1111

Bitwise NOR
- use nor instruction to do NOT instruction! 
	- let the variable be 0 
	- 0 nor 1 -> 0
	- 0 nor 0 -> 1
	- `nor $t0, $t0, $zero`
- Why is there no instruction for NOT? 
	- Keep instruction set small 
- `nori` is **not** present in MIPS 


Bitwise XOR
- use XOR instruction to do NOT instruction ! 
	- let the variable be 1 
	- 1 XOR 1 -> 0
	- 1 XOR 0 -> 1
	- `xor $t0, $t0, $t2` where `$t2` is all 1s
- `xori` is present in the MIPS instruction set 


### Loading a large constant into a 32-bit Register
Consider: `$t0 = 1010 1010 1010 1010 1111 0000 1111 0000`

**New Instruction**
- load upper immediate: `lui`
```
lui $t0, 0xAAAA
```
- Loads the first 16 bits into `$t0`
- $t0: `1010 1010 1010 1010 0000 0000 0000 0000`
- User `ori` to load lower 16 bits 
```
ori $t0, $t0, 0xF0F0
```
- $t0: `1010 1010 1010 1010 1111 0000 1111 0000`

### Memory Organisation 
![[Pasted image 20250829121948.png]] 
Single-dimension array of memory locations 
- Given k-bit address, the address space is of size $2^k$ 
	- e.g. address is 3-bits, it can have $2^3$, 8-bits address space
- Address on the right contains one byte (8-bits) in every location/ address

### Memory Transfer Unit
- Single byte or single word 
- Single Word 
	- usually $2^n$ bytes 
	- Common unit of transfer between processor and memory 
	- word size will normally coincide with the register size, the integer size and the instruction size in most architecture 
	- ![[Pasted image 20250829123424.png]]
	- Word Addressable memory: can only use address 0 and 4 
		- Otherwise, will lead to mis-aligned word!
		- How do we check if a given memory address is word-ailgned? 
			- Check if address % 4 == 0 
			- 4 is the word size (number of bytes)
	- Byte Addressable memory: can use all the addresses 0 to 7 

### Memory Instructions
32 registers, each 32-bit long. Each word is 32 bit long. 
MIPS = load-store register architecture

**Load Word Memory Instruction** 
```
lw $t0, 4($s0)
```
- `$t0`is the destination, `4` is displacement, `$s0` is source 
![[Pasted image 20250829141137.png]]
- move from memory into the register

**Store Word Memory Instruction**
```
sw $t0, 12($s0)
```
![[Pasted image 20250829141341.png]]
- move from register to memory


**Load and Store Instructions**
- only `load` and `store` instructions can access data in memory
- e.g. c code 
```c
A[7] = h + A[10]
// assign A -> $s3, h -> $s2
```
MIPS Code
```
lw $t0, 40($s3) 
add $t0, $s2, $t0
sw $t0, 28($s3)
```
- remember: arithmetic operands (for add) are for registers, not memory! 
- MIPS disallows loading/ storing unaligned word using `lw`/`sw` 
	- pseudo-instructions: unaligned load word, unaligned store word `ulw`,`usw`

**Other Instructions**
- load byte (`lb`): loads a singular byte into the register
- store byte (`sb`): stores a singular byte from the register into the memory address
	- takes the lowest byte of data from register
- note that offsets no longer needs to be a multiple of 4 (unlike words)

**Key Concepts: **
- Registers do not have types 
	- `add $t2, $t1, $t0`: `$t1` and `$t0` should have 32-bit 2s bits 
	- `lw $t2, 0($t1)`: `$t1` should contain address
- Consecutive words addresses in machines with **byte-addressing** do not differ by 1
	- to go to the next word, need to increment the address in a register by the sie of the word 


### Swapping Elements using MIPS
Sample Code 
```c
swap( int v[], int k)
{
	int temp;
	temp = v[k];
	v[k] = v[k+1];
	v[k+1] = temp;
}
```
  Variables Mapping 
  ```
k -> $5
Base address of v[] -> $4
temp -> $15
  ```
MIPS Code
```
sll $2, $5, 2 (calculate the offset of v[k])
add $2, $4, $2 (computes address of v[k] and stores in $2)
lw $15, 0($2) (loads v[k] into register)
lw $16, 4($2) (loads v[k + 1] into register)
sw $16, 0($2)
sw $15, 4($2)
```

### Making Decisions
![[Pasted image 20250829155340.png]]
- bne: Branch if not equal 
	- check t0 and t1, if both are equal, it will go to the next instruction after bne 
	- else it is taken to branch 
- beq: branch if equal
	- check t0 and t1, if both are equa, it will go the label 
	- else it will go to the next lne 
- Uncnditional(jump): `j label`
	- technically equivalent to `beq $s0, $s0, L1`
	- Will jump to the label 

Label is an anchor in the assembly code to indicate point of interest. 


### Writing IF Statements in MIPS 
![[Pasted image 20250829160152.png]]
- try to invert the condition for a shorter code 

### Writing loops in MIPS
![[Pasted image 20250829160625.png]]
![[Pasted image 20250829161103.png]]

###  Inequalities 
![[Pasted image 20250829161502.png]]
- check if t0 == 1 afterwards to see if s1 is < s2
- `slt` and `slti`

### Array and Loop
```c
result = 0
i = 0;

while (i < 40) {
	if (A[i] == 0) {
		result++;
	}
	
	i ++;
}
```

Using Index
![[Pasted image 20250829165328.png]]
Using Pointers (Address)
![[Pasted image 20250829165359.png]]



















 



