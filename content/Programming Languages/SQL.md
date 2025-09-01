---
title: SQL
draft: false
tags:
  - "#SQL"
---
### Left Join 
The `LEFT JOIN` keyword returns all records from the left table (table1), and the matching records from the right table (table2). The result is 0 records from the right side, if there is no match.

```sql 
SELECT _column_name(s)_  
FROM _table1_  
LEFT JOIN _table2  
_ON _table1.column_name_ = _table2.column_name_;
```