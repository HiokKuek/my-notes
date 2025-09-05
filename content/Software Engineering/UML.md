---
title: UML
draft: false
tags:
  - "#Modelling"
---
### Unified Modelling Language (UML)
Graphical notation to describe various aspects of a software system 
- brainchild of the three Amigos! 


#### Class Diagrams 
![[Pasted image 20250902103552.png]]
- Boxes represent class name, attributes, operations 
- Visibility: 
	- `+` : public
	- `-` : private
	- `#` : protected
	- `~` : package private
	- no visibility means unknown
- underline attributes/ operations to denote class-level attributes/ methods
- Triangle and a line to represent inheritance
- ![[Pasted image 20250902125806.png]]
- Composition is denoted with a solid diamond symbol
- ![[Pasted image 20250902130034.png]]
	- e.g. a `Book` is composed of `Chapter` objects. As a result, when the `Book` object is destroyed, its `chapter`  objects are destroyed too
	- composition because "chapters" are part of a book
	- 'whole-part' relationship
	- when whole is deleted, parts must be deleted too! 
- Aggregation is denoted with an empty diamond. 
  ![[Pasted image 20250902130306.png]]
	- e.g. a `Club` can contain `Person` therefore it is represented by aggregation 
	- container-containee relationship
- Dependency is represented with a dotted line-arrow
	- a need for one class to depend on another without having a direct association in the same direction.
	- e.g. an instance method in `A` takes and instance of Class`B` as an input
	![[Pasted image 20250902130933.png]]
	- ** you do not show dependencies in object diagram


### Object Diagrams
![[Pasted image 20250902103947.png]]
- class name and object name are underlined: `objectName:ClassName`
- Object name can be omitted too e.g., `:Car` which is meant to say 'an _unnamed_ instance of a `Car` object'.

### Representing Association
- use a line 
![[Pasted image 20250902104620.png]]
- Logic class has an attribute that stores the route 
- can specify multiplicity (number of objects that can be assoicated)
	- `0..1` : _optional_, can be linked to 0 or 1 objects.
	- `1` : _compulsory_, must be linked to one object at all times.
	- `*` : can be linked to 0 or more objects.
	- `n..m` : the number of linked objects must be within `n` to `m` inclusive e.g., `2..5`, `1..*` (one or more), `*..5` (up to five)
	- no multiplicity means unknown 
	
- can also indicate roles played by the classes in the association
![[Pasted image 20250902105352.png]]
```java
class Man {
    Woman wife;
}

class Woman {
    Man husband;
}
```
- Arrows on association are called association labels 
	- They show navigability
	- Class A -> Class B
	- Class A is associated by Class B because Class A uses an Class B object

### Association Classes 
- a class that represents additional information about association between two classes 
![[Pasted image 20250902131815.png| 500]]

### Abstract Classes/ Methods
![[Pasted image 20250902135744.png]]
- **You can use _italics_ or `{abstract}` (preferred) keyword to denote abstract classes/methods.** 


### Interfaces + Class implement interface
![[Pasted image 20250902132238.png]]

### Enumeration 
![[Pasted image 20250902132423.png]]
