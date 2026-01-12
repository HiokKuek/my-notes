---
title: SQL Syntax
draft: false
tags:
---
### Schema SQL

```sql
-- specifying column constraint
CREATE TABLE customers (
  first_name  VARCHAR(64) DEFAULT "JOHN",
  last_name   VARCHAR(64),
  email       VARCHAR(64),
  dob         DATE NOT NULL,
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

CREATE TABLE games (
  name        VARCHAR(32),
  version     CHAR(3),
  price       NUMERIC NOT NULL
	  CHECK (price > 0),
  PRIMARY KEY (name, version)
);


-- Referencing Table
CREATE TABLE downloads (
  customerid  VARCHAR(16)
    REFERENCES customers (customerid)
    ON UPDATE CASCADE -- changes will be propagated to the referencing table
    ON DELETE CASCADE,
  name        VARCHAR(32),
  version     CHAR(3),
  FOREIGN KEY (name, version)
    REFERENCES games (name, version)
);


```


### Operations on the Table
```sql
-- deletes content of the table but not its definition
-- recommend adding WHERE to avoid deleting the entire data
DELETE FROM customers;

-- deletes the content and definition of the table
DROP TABLE customers;

-- insert specific columns into the table 
-- any missing values will be replaced by the default value
INSERT INTO games (name, version) VALUES
  ('Aerified2', '1.0');
  
  
UPDATE games SET price = price - 5.5;

``` 


