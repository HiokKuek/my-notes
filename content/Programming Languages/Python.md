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

List Comprehension
```python
[expression for item in iterable if condition]

numbers = range(10) # 0 ... 9
even_numbers = [num for num in numbers if numbers % 2 == 0]


```

DefaultDicts
```python
from collections import defaultdict 

# Using list as default_factory  
word_counts = defaultdict(list)  
word_counts['fruits'].append('apple')  
word_counts['fruits'].append('banana')  
word_counts['vegetables'].append('carrot')  
print(word_counts)  
# Output: defaultdict(<class 'list'>, {'fruits': ['apple', 'banana'], 'vegetables': ['carrot']})

# Using int as default_factory  
char_counts = defaultdict(int)  
for char in "hello":  
char_counts[char] += 1  
print(char_counts)  
# Output: defaultdict(<class 'int'>, {'h': 1, 'e': 1, 'l': 2, 'o': 1})
```

- `list`: New keys will have an empty list `[]` as their default value. This is useful for grouping items.
- `int`: New keys will have `0` as their default value. Useful for counting occurrences.
- `set`: New keys will have an empty set `{}` as their default value.
- `str`: New keys will have an empty string `""` as their default value.

Destructring 

Fstring