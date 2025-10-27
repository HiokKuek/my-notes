---
title: SE Principles
draft: false
tags:
---
# Principle of Separation Concerns 
Separate the code into distinct sections, such that each section addresses a separate concern 

# Single Responsibility Principle 
A class should have one, and only one, reason to change.

# Liskov Substitution Principle 
Derived classes must be substitutable for their base classes 

# Open Closed Principle 
A module should be open for extension but closed for modification 

# Law of Demeter 
Don't talk to strangers
![[Pasted image 20251022103407.png]]
Friends are 
- parameters 
- fields of the class 
- objects created in the method 

Alternatives
- Receive an Author object instead of a Book
- Ask the book to change author info

> [!tip]
>  you don't want someone else to reach inside your pocket and take your money even if you are meant to pay the person!  
>  - reduces coupling! 

