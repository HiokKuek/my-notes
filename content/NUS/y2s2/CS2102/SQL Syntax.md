---
title: SQL Syntax
draft: false
tags:
---
### Creating a table

```sql
-- specifying column constraint
CREATE TABLE customers (
  first_name  VARCHAR(64),
  last_name   VARCHAR(64),
  email       VARCHAR(64),
  dob         DATE NOT NULL DEFAULT 010101,
  since       DATE,
  customerid  VARCHAR(16)
    PRIMARY KEY, -- applies to the column
  country     VARCHAR(16)
);

-- specifying table constraint
CREATE TABLE customers (
  first_name  VARCHAR(64),
  last_name   VARCHAR(64),
  email       VARCHAR(64),
  dob         DATE,
  since       DATE,
  customerid  VARCHAR(16),
  country     VARCHAR(16),
  PRIMARY KEY (customerid) -- after column
);


```


### Operations on the Table
```sql
-- deletes content of the table but not its definition
-- recommend adding WHERE to avoid deleting the entire data
DELETE FROM customers;

-- deletes the content and definition of the table
DROP TABLE customers;
``` 
