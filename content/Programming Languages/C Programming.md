---
title: C Programming Language
draft: false
tags:
  - CS2100
---

### Arrays in C
Arrays are homogeneous - their elements are all of the same type
Declaration: `int c[30]`
- occupy contiguous memory locations and are accessed through indexing 

Can be initialised at the same time: `int a[3] = {54, 9, 10};`
- If fewer initial values are provided (compared to size), the remaining values will be initialised to **zero** 

e.g. to populate an array with user input 
```c
int arr[100];
for (int i=0; i<10; i++) {
	scanf("%d", &arr[i]);
}
```

Array name refers to the address of the first element 
```c
int a[3]
printf("%p\n", a); // same as below
printf("%p\n", &a[0]); // same as above
printf("%p\n", &a[1]); // diff from above
```

Copying arrays over is illegal in c, i.e. `destArr = sourceArr` since both are pointers pointing to the start of the array. Instead, you need to write a loop. 

Name of array is not needed in function prototype. Hence both the following are accepted: 
```c
int sumArray(int [], int);
int sumArray(int arr[], int sie);
```
- No ned to put array size, even if it is present, compiler would ignore it. 

Since array name is a pointer, we can also have the alternative syntax: 
```c
int sumArray(int *, int);

int sumArray(int *arr, int size) {
	...
}
```
- Note that typically when functions are called, values are copied over in C. 
- However, since array is a pointer, it means that a function can always modify the content of the array it receives. (whether intended)

###  Strings in C
- is an array of characters with a '\0' (null character at the back)
- `#include <string.h>`for functions to manipulate strings
**Initialising a String**
```c
char fruit_name[] = "apple"
char fruit_name[] = {'a', 'p', 'p', 'l', 'e', '\0'}
```
**Read screen from stdin**
```c
# reads size - 1 char or until new line
fgets(str, size, stdin)

# reads until white space
scanf("%s", str);
```


### Pointers
- You may refer to the address of a variable by using the address operator `&`
- `%p` is the format specifier for address i.e. `printf("%p", &a)`
- Initialising a pointer `int *a_ptr = &aaa`
- to access a variable through a pointer, you dereference a pointer `*a_ptr`
**Problems with pointers**
- Two or more pointers can point to the same object
- No easy  way to check if a pointer is valid 
- Dangling Pointers

**Incrementing a pointer**
- incrementing a pointer will increment the pointer's address by the size of the type of the pointer
	- int takes 4 bytes
	- float takes up 4 bytes
	- char takes up 1 byte
	- double takes up 8 bytes


**Turning a multidimensional array into a one-dimensional one**
Required for storing multi-dimensional array in memory
- Row Major Order
	- store row by row by row 
- Column Major Order 
	- store column by column by column
![[Pasted image 20250831161230.png]]

### Structures 
Allow grouping of heterogeneous members
declaration of structure type
```c
typedef struct {
	int day, month, year;
} date_t;

typedef struct {
	int cardNum;
	date_t expiryDate
}
```
- Types are not variables 
- Types need to be defined before we can declare a variable
- declaration + initialisation + accessing  
```c
card_t card = {88888, {31, 12, 2020}};

card.expiryDate.year
```

Can do assignments with structures. ie. `struct1 = struct2`

Structures in functions 
```c
void change_name_and_age(player_t *player_ptr) {
	strcpy((*player_ptr).name, "Alexandra");
	(*player_ptr).age = 25;
}
```

Since syntax like `(*player_ptr).name` appear very often, an alternative syntax created for it is the `->` operator. I.e. `player_ptr->name`


### Misc
```c
enum Heat {
	LOW,
	MEDIUM,
	HIGH
}
```
- represents a group of integer constants