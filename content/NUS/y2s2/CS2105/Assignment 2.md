---
title: Learnings from CS2105 Assignment 2
draft: true
tags:
  - "#networking"
  - application-layer
  - socket-programming
---
# Task 
Implement RDT 3.0. At the transport layer, implement checks to allow you to send and receive packets over a network that can corrupt and drop packets. 


# What I have learnt 🔥

### 1. UDP Sockets 

Creation of UDP Sockets
```python
import socket 

address = ('localhost', 8888)
sock = socket.socket(socket.AF_INET, socket.SOCK_DGRAM)
```

Sending and receiving packets through UDP Sockets 
```python
sock.sendto(packet, address)

packet, address = sock.recvfrom(1024) # blocking operation, 1024 is in bytes
```

Setting a timer on the socket 
```python
sock.settimer(1) #1 s timer that begins on sock.sento(..)
```
- Any blocking operations, i.e. `recvfrom` will raise a `socket.timeout` if operation does not complete within the desired time 

### 2. FSM Diagram for RDT 3.0
I found that it is a lot quicker to try and understand the FSM diagram before trying to code up RDT 3.0. It really helps with organising my thought process and understanding how RDT3.0 works. 
#### Sender FSM
![[Pasted image 20260401164701.png]]

#### Receiver FSM
![[Pasted image 20260401164730.png]]


### Mistakes I made 
- When calculating the checksum for the network package, it is important to calculate the checksum of all the elements in the header as well. 
