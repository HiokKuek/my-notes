---
title: MSI Components
draft: false
tags:
---
# Introduction 
**Integrated Circuit**
- set of electronic circuits on one small flat piece of semiconductor material

**Scale of integration**
- the number of components fitted into a standard size IC

![[Pasted image 20251017162130.png]]
#ssi #msi #lsi #vlsi #ulsi

# Decoders 
Convert binary information from n input lines to a maximum of $2^n$ output lines

### 2x4 Decoder 
- selects an output line based on the 2-bit code supplied. 
- ![[Pasted image 20251017162616.png]]

### 3x8 Decoder
![[Pasted image 20251017162646.png]]
- outputs represent the minterms

### Implementing Functions
- A boolean function, in sum-of-minterms form -> 
	- decoder to generate the minterms, and 
	- an OR gate to form the sum 
- Any combinational circuit with n inputs and m outputs can be implemented with an $n:2^n$ decoder with m OR gates
- Good when circuit has many outputs, and each function is expressed with a few minterms
- Example of using a decoder to implement functions 
- ![[Pasted image 20251017163221.png]]

### Decoders with Enable 
- Decoders often come with an enable control signal, so that the device is only activated when the enable, E = 1
- ![[Pasted image 20251017163635.png]]
- However, in most MSI decoders, the enable signal is a zero-enable. 
	- If you want to use the decoder, you put a 0 instead of a 1

### Constructing Larger Decoders
- you can construct larger decoders from smaller ones
- e.g. building a 3x8 decoder from two 2x4 decoder
- ![[Pasted image 20251017163927.png]]



# Encoders 
Encoding is the converse of decoding
- takes in $2^n$ input lines and produces $n$ output.
![[Pasted image 20251017173544.png]]


### Priority Encoders
- if two or more inputs equal to 1, the input with the highest priority takes precedence 
- If all inputs are 0, this input combination is considered invalid
![[Pasted image 20251017180740.png]]

# Demultiplexers 
- given an input line and a set of selection lines, a demultiplexer directs data from the input to one selected output line. 
- e.g. 1-to-4-demultiplexer
- ![[Pasted image 20251019113959.png]]

> [!tip]
>  Internally, a demultiplexer circuit is actually **identical** to a decoder with enable! 

![[Pasted image 20251019114200.png]]

# Multiplexers
- Also known as a *data selector!*
- A device that has: 
	- a number of input lines 
	- a number of selection lines 
	- one output line 
- It steers one of $2^n$ inputs to a single output line, using n selection lines. Also known as a data selector.
- e.g. `4-to-1-multiplexer`
- ![[Pasted image 20251019114425.png]]

How to implement a `4-to-1-multiplexer`?
![[Pasted image 20251019114743.png]]

### Standard MSI Multiplexer 
`8-to-1 multiplexer`
![[Pasted image 20251019115600.png]]