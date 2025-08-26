---
title: Packages
draft: false
tags:
---
- put a `package` statement at the very top of every source file in that package
- package of a type should match the folder path of the source file 

```java title:<src>/seedu/tojava/util/Formatter.java
package seedu.tojava.util;

public class Formatter {
    public static final String PREFIX = ">>";

    public static String format(String s){
        return PREFIX + s;
    }
```

**Convention**
- package names are written in all lower case

### Using package member outside the package
- use the full qualified name 
- Import the package or the specific package member
e.g. 
```java title:<src>/seedu/tojava 
package seedu.tojava; 

import seedu.tojava.util.StringParser; 
import seedu.tojava.frontend.*;
```

**Notes:**
- importing a package does not import it's sub-packages
	- packages do not have hierarchies despite appearances! 
- If there is no package statement, it means that the type does not have a package
- You can use a static import to import static members of a type 
```java
import static seedu.tojava.util.Formatter.PREFIX;
import static seedu.tojava.util.Formatter.format;

public class Main {

    public static void main(String[] args) {

        String formatted = format("Hello");
        boolean isFormatted = formatted.startsWith(PREFIX);
        System.out.println(formatted);
    }
}
```

