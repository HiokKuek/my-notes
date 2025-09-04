---
title: "Code Quality: Naming"
draft: false
tags:
  - "#SWE"
---

### Basic 
> [!tip] Use nouns for things and verbs for actions 
> Example Class: ❌ `CheckLimit` vs  ✅ `LimitChecker`
> Example Method:  ❌ `result()` vs  ✅ `calculate()`
> 

> [!tip]  Distinguish clearly between single-valued and multi-valued variables.
> `Person student;` 
> `ArrayList<Person> students;`

>[!warning] Avoid 'texting-style' spelling
> Avoid foreign language words, slang, and names that are only meaningful within specific contexts/times

### Intermediate
> [!tip] Use naming to explain 
> Example: ❌ `processInput()` vs  ✅ `removeWhiteSpaceFromInput()`
> Example: ❌ `flag()` vs  ✅ `isValidInput()`
> Example: ❌ `temp`

>[!warning] Don't use number to differentiate variables
>Example: ❌ `value1`, `value2` ✅ `originalValue`, `finalValue`


