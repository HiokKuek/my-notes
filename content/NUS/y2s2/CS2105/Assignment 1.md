---
title: Learnings from CS2105 Assignment 1
draft: true
tags:
  - "#networking"
  - "#application-layer"
  - "#socket-programming"
---
 # Task  
  
Build a **TCP server using Python sockets** that listens for client connections and processes requests sent over a custom application-layer protocol.  
  
The server should:  
  
- Listen on a specified host and port.  
- Accept incoming TCP connections.  
- Receive and parse requests sent by clients.  
- Handle multiple request types.  
- Support **persistent connections** (multiple requests over the same TCP connection).  
- Send responses back to the client.  
  
The goal of the assignment was to understand how **network applications are built directly on top of TCP**, without relying on higher-level frameworks such as HTTP servers.  
  
---  
  
# What I Have Learnt 🔥  
  
## 1. The Basic Lifecycle of a TCP Server  
  
A TCP server typically follows this structure:  
  
```python  
import socket  
  
s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)  
s.bind((HOST, PORT))  
s.listen()  
  
while True:  
    conn, addr = s.accept()  
    handle_connection(conn)
``` 

Key steps:

1. **Create socket** – defines the communication endpoint.
2. **Bind** – attaches the socket to an IP address and port.
3. **Listen** – allows the socket to accept incoming connections.
4. **Accept** – establishes a connection with a client.
    
An important insight is that `accept()` returns a **new socket dedicated to that specific client**, while the original socket continues listening for new connections.

---

## 2. TCP Is a Stream, Not Message-Based

One major networking concept is that **TCP delivers a continuous stream of bytes** rather than discrete messages.

For example:
```python
data = conn.recv(1024)
```

A single call to `recv()` may return:
- Part of a message
- Exactly one message
- Multiple messages combined

Therefore, the application layer must implement **its own message boundaries**.

This is a fundamental difference between **TCP (stream-oriented)** and **UDP (message-oriented)** communication.

---

## 3. Message Framing at the Application Layer

Because TCP does not preserve message boundaries, the server must determine **where each request starts and ends**.

Common strategies include:
- Delimiters (e.g., `\r\n\r\n`)
- Length headers
- Fixed-length messages

Example pattern:
```python
buffer += conn.recv(1024)  
if delimiter in buffer:  
    message, buffer = buffer.split(delimiter, 1)
```

This buffering pattern ensures that requests can be correctly reconstructed even if the data arrives in **multiple chunks**.

---

## 4. Separating Headers and Payload

Many network protocols organize requests into:
- **Headers** – metadata describing the request
- **Payload (body)** – the actual data

Example structure:
```
REQUEST_TYPE /resource  
Content-Length: 5  
hello
```

The server must first parse the headers, then determine whether a **payload exists and how large it is**.

This mirrors how protocols like **HTTP structure requests**.

---
## 5. Handling Variable-Length Data

When requests contain payloads, the server needs to ensure that the **entire payload has been received** before processing it.

Typical pattern:
```python
while len(buffer) < expected_length:  
    buffer += conn.recv(1024)
```

This highlights an important networking principle:

> A network application must never assume that all expected data arrives in a single read.

---
## 6. Buffering Is Essential in Network Programming

To safely handle streaming data, the server maintains a **buffer** that accumulates incoming bytes.

Example concept:
```python
buffer += incoming_data
```


The buffer allows the server to:
- Handle **partial messages**
- Process **multiple messages in a single read**
- Preserve extra bytes for the next request

This is a common design pattern in **real-world servers and protocol parsers**.

---
## 7. Persistent TCP Connections

Instead of closing the connection after a single request, the server can continue reading from the same connection:

```python
while True:  
    data = conn.recv(1024)
```

This enables **persistent connections**, where clients can send multiple requests without reconnecting.

Advantages include:
- Reduced connection overhead
- Improved performance
- Behavior similar to **HTTP keep-alive**
    

---

## 8. Detecting When a Connection Is Closed

In TCP, a closed connection is detected when:
```python
data = conn.recv(1024)  
  
if not data:  
    break
```

Receiving **zero bytes** indicates that the client has closed the connection.

Handling this correctly ensures that the server:
- Releases resources
- Stops waiting for further data

---
## 9. Sequential Connection Handling
A simple server often handles **one client connection at a time**:
```
accept client  
    ↓  
process requests  
    ↓  
connection closes  
    ↓  
accept next client
```

This design is easy to implement but does not scale well under high load.

More advanced servers use:
- **Threads**
- **Processes**
- **Asynchronous I/O**

to handle many clients concurrently.

---
## 10. How Real Protocols Work Internally

By implementing a server directly on top of TCP, I gained a better understanding of how higher-level protocols work internally.

Concepts that became clearer include:
- Application-layer protocol design
- Request parsing
- Message framing
- Streaming data handling
- Persistent connections

This assignment helped bridge the gap between **networking theory and practical system implementation**.