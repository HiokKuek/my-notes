---
title: C Programming Language
draft: false
tags:
  - CS2100
---

### Arrays in C
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