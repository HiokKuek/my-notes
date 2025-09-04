---
title: Varargs
draft: false
tags:
---
 Varargs is a syntactic sugar type feature that allows writing a method that can take a variable number of arguments. 
### Syntax
```java
public void myMethod(String... messages) {
    // Method body
}
```


### Usage
```java
    myMethod("Hello", "World"); // Two arguments
    myMethod("Single message"); // One argument
    myMethod(); // No arguments
```


```java
    public void printMessages(String... messages) {
        for (String msg : messages) {
            System.out.println(msg);
        }
    }
```

### Rules 
1. A method can have at most one vararg  parameter
2. If a method has other parameters, varargs must be the last one in the method signature
3. All arguments passed to varargs must be of the same data type 
4. Java compiler will automatically convert the variable arguments into an array when the method is called 
5. if called with no arguments, internal array will have length of 0