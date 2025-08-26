---
title: "Testing: JUnit"
draft: false
tags:
---
Testing with JUnit

### Conventions 
When writing JUnit test for a class `Foo`, common practice is to create a `FooTest` class, which will create various test methods for testing methods of the `Foo` class

e.g 
```java title:IntPair.java
public class IntPair {
    int first;
    int second;

    public IntPair(int first, int second) {
        this.first = first;
        this.second = second;
    }

    /**
     * Returns The result of applying integer division first/second.
     * @throws Exception if second is 0.
     */
    public int intDivision() throws Exception {
        if (second == 0){
            throw new Exception("Divisor is zero");
        }
        return first/second;
    }

    @Override
    public String toString() {
        return first + "," + second;
    }
}

```
will have the following test class to match
```java IntPairTest.java
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.fail;

public class IntPairTest {

    @Test
    public void intDivision_nonZeroDivisor_success() throws Exception {
        // normal division results in an integer answer 2
        assertEquals(2, new IntPair(4, 2).intDivision());

        // normal division results in a decimal answer 1.9
        assertEquals(1, new IntPair(19, 10).intDivision());

        // dividend is zero but divisor is not
        assertEquals(0, new IntPair(0, 5).intDivision());
    }

    @Test
    public void intDivision_zeroDivisor_exceptionThrown() {
        try {
            assertEquals(0, new IntPair(1, 0).intDivision());
            fail(); // the test should not reach this line
        } catch (Exception e) {
            assertEquals("Divisor is zero", e.getMessage());
        }
    }

    @Test
    public void testStringConversion() {
        assertEquals("4,7", new IntPair(4, 7).toString());
    }
}
```
- `@Test` annotation
- `assertEquals(expected, actual)`
	- comes with other similar methods: `assertNull`, `assertNotNull`, `assertTrue`, `assertFalse`
- java code normally uses camelCase for method names
	- testing method has another convention: `unitBeingTested_descriptionOfTestInputs_expectedOutcome`

### Stub 
> [!info] 
> **Stub**: A stub has the same interface as the component it replaces, but its implementation is so simple that it is unlikely to have any bugs. It mimics the responses of the component, but only for a limited set of predetermined inputs. That is, it does not know how to respond to any other inputs. Typically, these mimicked responses are hard-coded in the stub rather than computed or retrieved from elsewhere, e.g., from a database.


