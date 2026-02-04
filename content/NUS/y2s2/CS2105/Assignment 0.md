---
title: Learnings from CS2105 Assignment 0
draft: false
tags:
---
# Dealing with binary files 

### Checksum 
The first task of the assignment was a relatively simple one. We had to read in the binary data of a file and calculate it's checksum. 

#### What I've learnt 🔥
```python
# open a file for reading, treat the data as binary and return a stream
with open(file_path, "rb") as f:
	
	# read and return bytes of the file
	bytes = f.read()
```

`byte.read()` vs `byte.read1()`
- `.read()` will read the entire file, and only return if the specified number of bytes are read or if EOF is encountered
- `.read1()` will return when new data streams in 

### Inspecting the binary data of `stdin`
The second task was much harder (imo), we had to inspect the data from `stdin` and manipulate it accordingly before passing it into `stdout`


### What I've learnt 🔥

To read a continuous stream of data from `stdin`, we can do: 
```python
import sys

while True:
	data = sys.stdin.buffer.read1()
	
	# ensure that program doesn't run infinitely
	if not data: 
		break
		
	.. 
```

To push data out through `stdnout`, we can do:
```python
sys.stdout.buffer.write(payload)
sys.stdou.buffer.flush()
```


Convert string into bytes: 
```python
string = "hello"
byte = string.encode()

byte = b'hello'
string = byte.decode()
```

Byte methods: 
```python
pos = byte.find(b"B") # returns the lowest index matching the string or -1

byte.startWith("Size: ") # returns a boolean

byte[start:end] # slicing is similar to strings
```


















