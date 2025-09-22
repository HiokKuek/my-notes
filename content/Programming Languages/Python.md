---
title: Python Syntax
draft: false
tags:
---

### lists
- Python lists are mutable
- This is problematic when you are passing lists as a argument in a function 
```python
my_list = []
new_list = my_list # creates a pointer to my_list

my_list.append(2)
print(new_list) # [2]

copied_list = my_list.copy() # creates a new list object in memory

my_list.append(3)
print(my_list) # [2, 3]
print(new_list) # [2, 3]
print(copied_list) # [2] 

# sort in reverse order
my_list.sort(reverse=True)
```


### **Set**
```python
seen = set() 
seen.add(1)
seen.remove(1)
```
- can compare equality of two sets with `==`

### Dictionary
```python
my_dict = {}
my_dict["key"] = "value"

# to force a default value 
my_dict.get("key", "default value")

#remove 
my_dict.pop("key")
```

### String 
```python
my_string = " my string " 

# remove trailing whitespace
my_string.strip()

# convert into array based on space
my_string.split(" ")
```

### Python List as stacks
```python
my_stack = []
my_stack.append(10) # [10]
my_stack.append(20) #[10, 20]
my_stack[-1] # look at the last element of the stack 

print(my_stack.pop()) # 20 (last element added into stack)
```

### Double-ended queue in python 
```python
my_queue = collections.deque([])

my_queue.append(10) # Appends 10 to the right of the queue
my_queue.appendleft(20) # Appends 20 to the left of the queue
# [20, 10]

my_queue.pop() # pops from the right of the queue
# [20]

my_queue.append(10)
# [10, 20]

my_queue.popleft() # pops from the left of the queue
# [10]

my_queue.append(10)
# [10, 20]

# Accessing the queue
print(my_queue[0]) # 10
print(my_queue[-1]) # 20

```

### List Comprehension
```python
[expression for item in iterable if condition]

numbers = range(10) # 0 ... 9
even_numbers = [num for num in numbers if numbers % 2 == 0]


```

### DefaultDicts
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

### f string
```python
name = "Alice"
age = 30
message = f"Hello, {name}. You are {age} years old."
print(message)
# Output: Hello, Alice. You are 30 years old.

result = f"The sum of 5 and 10 is {5 + 10}."
print(result)
# Output: The sum of 5 and 10 is 15.

price = 123.45678
formatted_price = f"The price is {price:.2f}."  # Format to 2 decimal places
print(formatted_price)
# Output: The price is 123.46.

large_number = 1234567
formatted_number = f"Value: {large_number:,}" # Add comma as thousands separator
print(formatted_number)
# Output: Value: 1,234,567
```

### Assert 
```python 
# assert condition, message

def add(a, b):
	return a + b 

assert add(1, 1) == 2, "expected 2 but got something else"
```
-  if condition evaluates to `False`, an `AssertionError` is raised
- `message` is optional but provides additional information about the assertion if it fails 


### tricks 
```python 

heights = [10, 10, 10, 10]

for i, h in enumerate (heights):
	# i represents the index
	# h represents the height at each index
```

- `nonlocal` keyword is used within nested functions to explicitly declare that a variable refers to a variable in the nearest enclosing scope that is not the global scope