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
3. the names of constructor functions start with **uppercase** letters.

Method
1. store a function in a property of an object, which turns it into a method that you can invoke via that object.
2. an example invocation: **obj.foo()**
3. the names of method functions start with **lowercase** letters.

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
#### (Important, Recommended) Function Declarations
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

##### In a non-object-oriented context

1. func.apply(thisValue, argArray)
2. is useful whenever a function accepts multiple arguments in an array-like manner, but not an array.
3. thisValue is not needed in a non-object-oriented setting, and is thus null here.

```
Math.max(17, 33, 2)
Math.max.apply(null, [17, 33, 2])
```

1. func.bind(thisValue, arg1, ...argN)
2. This performs partial function application,
3. a new function is created,
4. thisValue is not needed in the non-object-oriented setting.

```
function add(x, y) {
  return x + y;
}
var plus1 = add.bind(null, 1);

plus1(5);     // 6
```

##### In an object-oriented context

```
var jane = {
  name: 'Jane',
  sayHelloTo: function(otherName) {
    'use strict';
    console.log(this.name + ' says hello to ' + otherName);
  }
}

jane.sayHelloTo('Tarzan');                          // Jane says hello to Tarzan
jane.sayHelloTo.call(jane, 'Tarzan');               // Jane says hello to Tarzan
jane.sayHelloTo.call({name: 'Hui'}, 'Tarzan');      // Hui says hello to Tarzan

jane.sayHelloTo.apply(jane, ['Tarzan']);            // Jane says hello to Tarzan
jane.sayHelloTo.apply({name: 'Hui'}, ['Tarzan']);   // Hui says hello to Tarzan

var func1 = jane.sayHelloTo.bind(jane);
func1('Tarzan');                                    // Jane says hello to Tarzan
var func2 = jane.sayHelloTo.bind(jane, 'Tarzan');
func2();                                            // Jane says hello to Tarzan


var func = jane.sayHelloTo;                         // Jane says hello to Tarzan
func.call(jane, 'Tarazn');                          // Jane says hello to Tarzan
func.call({name: 'Hui'}, 'Tarazn');                 // Hui says hello to Tarzan

func.apply(jane, ['Tarazn']);                       // Jane says hello to Tarzan
func.apply({name: 'Hui'}, ['Tarzan']);              // Hui says hello to Tarzan

```
> 1. Function.prototype.call(thisValue, arg1?, arg2?, ...)
> 2. The first parameter is the value that **this** will have inside the invoked function.
> 3. The remaining parameters are handed over as arguments to the invoked function.

> 1. Function.prototype.apply(thisValue, arrArray)
> 2. The first parameter is the value that **this** will have inside the invoked function.
> 3. The second parameter is an array that provides the arguments for the invocation.

> 1. Function.prototype.bind(thisValue, arg1?, ..., argN?)
> 2. This method performs partial function application
> 3. It creates a new function
> 4. The new function appends its arguments to arg1, ... argN when it calls the original function.

```
function func() {
  console.log('this: ' + this);
  console.log('arguments: ' + Array.prototype.slice.call(arguments));
}
var bound = func.bind('abc', 1, 2);
bound();                                            // this: abc arguments: 1,2
```
```
function func(a, b) {
  console.log('this: ' + this);
  console.log('a: ' + a);
  console.log('b: ' + b);
  console.log('arguments: ' + Array.prototype.slice.call(arguments));
}
var bound = func.bind('abc', 1);
bound();                                            // this: abc a: 1 b: undefined arguments: 1
bound(1);                                           // this: abc a: 1 b: 1 arguments: 1,1

var bound = func.bind('abc', 1, 2);
bound();                                            // this: abc a: 1 b: 2 arguments: 1,2
bound(1);                                           // this: abc a: 1 b: 2 arguments: 1,2,1

var bound = func.bind('abc', 1, 2, 3);
bound();                                            // this: abc a: 1 b: 2 arguments: 1,2,3
bound(1);                                           // this: abc a: 1 b: 2 arguments: 1,2,3,1
```
