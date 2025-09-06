---
title: What happens when you enter a URL into a Browser
draft: false
tags:
  - "#dns"
  - "#tcp"
  - "#http"
  - "#toedit"
---
	### Universal Resource Locator (URL)
Directs your browser exactly where to go and what to fetch from the internet. 

Let's dissect the url:  `http://example.com/products/view/item12345.html`
1. `http`: scheme
	- specifies the protocol the browser uses to access the resource
	- `https`means to secure the connection by encrypting the data for secure transmission
2. `example.com`: domain
	- Identifies the web server that hosts the content
3. `products/view`: path
	- navigates through the server's resources 
4. `item12345.html`: resource


### DNS Resolution Process
When a URL is entered into the browser, the first task is to resolve the domain name to an IP address through the Domain Name System (DNS)

**Caching**: the browser will first check if the domain is cached in the following areas: 
1. Browser Cache
2. Operating System Cache
3. Router and ISP Cache

If caching fails, the operating system will query a recursive DNS resolver which is configure in the network settings and is often provided by the Internet Service Provider (ISP) or a third-party service. 

**Recursive DNS Resolver** e.g. `example.com`
1. Root DNS Server
	- provide a pointer to the relevant TLD server for the domains ending in `.com`
2. TLD DNS Server
	- Directs the resolver to the authoritative DNS server that contains the exact IP address for `example.com`
3. Authoritative DNS Server
	- Holds the DNS record for `example.com` and provides IP address to the recursive resolver (returns!) 

back to recursive resolver -> operating system -> browser

With the IP address, browser can now initiate a connection to the web server hosting `example.com` and request the resource located at xxx

### Establish Communication: TCP and TLS Handshakes

#### Three-Step TCP Handshake Process
1. SYN (Synchronize)
	- browser sends SYN packet to the server 
	- tells the server that browser wants to establish a connection 
2. SYN-ACK (Acknowledgement)
	- upon receiving SYN packet, server responds with a SYN-ACK packet 
	- acknowledges the receipt of the SYN packet 
	- contains the server's own SYN request 
3. ACK 
	- The browser, upon receiving SYN-ACK, sends back an ACK packet. 
	- Final step acknowledges the serve's response 
	- Connection is established
	- Ready for data transmission! 

>[!note] Efficiency with Keep-Alive
>Modern browsers utilise a strategy known as 'keep-alive' to maintain a persistent connection to the server. This means that once a connection is established, it remains open for a period, allowing for additional requests to be made without the need to perform another handshake. 
>
>**Significantly** reduces the overhead and latency, making subsequent requests to the same server more efficient.

TODO: Add TLS handshake -> additional layer of the connection process for secure HTTPS connection. 

### HTTP Req/Res
Once connection between the browser and the server is established, exchange of data is made possible through HTTP requests. 

The request looks something like this: 
```
GET /products/view/item12345.html HTTP/1.1  
Host: example.com
```
- `GET` is the HTTP method used, indicating that the browser wants to retrieve data.
- `/products/view/item12345.html` is the path to the specific resource on the server.
- `HTTP/1.1` specifies the version of the HTTP protocol being used.
- `Host: example.com` indicates the domain name of the server.

The server, upon receiving the request, will process it and send back an HTTP response. A successful response will include the requested resource, i.e.
```
HTTP/1.1 200 OK  
Content-Type: text/html; charset=utf-8  
  
<!DOCTYPE html>  
<html lang="en">  
...  
</html>
```
- `HTTP/1.1 200 OK` is the status line, where `200 OK` indicates a successful response.
- `Content-Type: text/html; charset=utf-8` specifies the media type and character encoding of the response.
- The HTML document follows, which the browser will render for the user.

### Rendering The Webpage
Upon receiving the HTML content, the browser begins rendering the process. It constructs the DOM, applies CSS styles, executes JavaScript, and loads additional resources as needed, such as images and fonts. 


Source: [Medium Article](https://medium.com/@atakanserbes/web-navigation-demystified-what-happens-when-you-enter-a-url-into-a-browser-39d8f2043b19)
