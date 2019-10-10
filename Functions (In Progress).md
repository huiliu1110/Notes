Reference:  
http://speakingjs.com/es5/ch15.html  
http://speakingjs.com/es5/ch17.html

---
#### (Important) Nonmethod funciton vs. Constructor vs. Method

Nonmethod funciton (normal function)
1. call a function directly.
2. an example invocation: **foo()**.
3. the names of normal functions start with **lowercase** letters.

Constructor (a factory for objects)
1. invoke a function via the new operator.
2. an example invocation: **new Date()**.
3. the names of normal functions start with **uppercase** letters.

Method
1. store a function in a property of an object, which turns it into a method that you can invoke via that object.
2. an example invocation: **obj.foo()**
3. the names of normal functions start with **lowercase** letters.

---
#### Parameters vs. Arguments

Parameters / formal parameters / formal arguments: are used to define a function.  
Arguments / actual parameters / actual arguments: are used to invoke a function.  


---
#### Expressions vs. Statements

An expression produces a value.  
A statement performs an action.  

---
#### (Important) Anonymous function expressions / Normal function expressions
```
var add = function(a, b) {
  return a + b;
}

add(1, 2);  // 3
add.name    // ''
```
1. The value produced by a function expression can be assigned to a variable.
2. call it via that variable,
3. pass it as an argument to another funcion via that variable,
4. normal funcion expressions don't have a name.

---
#### (Important) Named function expressions
```
var fac = function me(n) {
  if (n > 0) {
    return n * me(n - 1);
  } else {
    return 1;
  }
}

fac(6)      // 6
fac.name    // 'me'
```
1. Give a function expression a name, allows a function expression to refer to itself.
2. The name of a named function expression is only accessible inside the function expression.
3. is useful for self-recursion.
4. is useful for debugging.

---
#### (Important) Function Declarations
```
function add(x, y) {
  return x + y;
}

add(1, 2)   // 3
add.name    // 'name'
```
1. A function declaration declares a new variable, creates a funcion object, and assigns it to the variable.

---
#### The Function Constructor
```
var add = new Function('x', 'y', 'return x + y');
```
1. The constructor Function() evaluates JavaScript code stored in strings.
2. this way of defining a function is slow and keeps code in strings.
3. It works similarly to eval().

---
#### (Important) Hoisting
1. Hoisting means "moving to the beginning of a scope."
2. Function declarations are completely hoisted.
3. var declarations are hoisted, but only the declarations, not assignments made with them.

```
foo();
function foo() {     // this function is hoisted
}

// JavaScript engine moves the declaration of foo to the beginning of the scope,  
// executes the preceding code as
function foo() {
}
foo();
```

```
foo();              // TypeError: undefined is not a function
var foo = function() {
}

// JavaScript engine executes the preceding code as: 
var foo;
foo();              // TypeError: undefined is not a function
foo = function() {
}
```

---
### (Important) call(), apply(), and bind()

> 1. call(), apply(), and bind() are methods that all functions have.
> 2. They can supply a value for **this** when invoking a method, thus are mainly intersting in an object-oriented context.



---

#### this
