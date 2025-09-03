---
title: Python Syntax
draft: false
tags:
---
 **Set**
```python
seen = set() 
seen.add(1)
seen.remove(1)
```
- can compare equality of two sets with `==`

Dictionary
```python
my_dict = {}
my_dict["key"] = "value"

# to force a default value 
my_dict.get("key", "default value")

#remove 
my_dict.pop("key")
```

String 
```python
my_string = " my string " 

# remove trailing whitespace
my_string.strip()

# convert into array based on space
my_string.split(" ")
```

Python List as stacks
```python
my_stack = []
my_stack.append(10) # [10]
my_stack.append(20) #[10, 20]

print(my_stack.pop()) # 20 (last element added into stack)
```