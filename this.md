References:  
https://2ality.com/2014/05/this.html  
https://2ality.com/2017/12/alternate-this.html

---
To understand **this**, it is better to partition the locations where **this** can be used into three categories:
* In function: **this** is an extra, often implicit, parameter.
* Outside functions (in the top-level scope): this refers to the global object in browsers and to a modules' exports in Node.js.
* In a string passed to eval(): ??????

---
### ***this*** in functions
#### ***this*** in real function
1. **this** is an implicit parameter that is set to a default value
**this** refers to the global object (window in browsers) in sloppy mode. 
```
function sloppyFunc() {
  console.log(this === window);
}
sloppyFunc();                           // true
```
**this** is undefined in strict mode.
```
function strictFunc() {
  'use strict';
  console.log(this === undefined);
}
strictFunc();                           // true
```
2. You can make a function call via call() or apply() and specify the value of **this** explicitly
```
function func(arg1, arg2) {
  console.log(this);			// a
  console.log(arg1);			// b
  console.log(arg2);			// c
}
func.call('a', 'b', 'c');
func.apply('a', ['b', 'c']);
```

#### ***this*** in constructors
Functions become constructors if you invoke them via the **new** operator. That operator creates a new object and passes it to the constructor via **this**. In other words, this refers to the newly created instance.
```
var savedThis;
function Constr() {
  savedThis = this;
}
var inst = new Constr();
console.log(savedThis === inst);        // true
```

Implemented in JS, the **new** operator looks roughly as follows:
```
function newOperator(Constr, arrayWithArgs) {
  var thisValue = Object.create(Constr.prototype);
  Constr.apply(thisValue, arrayWithArags);
  return thisValue;
}
```

#### ***this*** in methods
A function becomes a method if it is the value of an object property.
In methods, things are similar to more traditional object-oriented languages: **this** refers to the receiver, the object on which the method has been invoked.

```
var obj = {
  method: function() {
    console.log(this === obj);          // true
  }
}
obj.method();
```
---
### ***this*** in the top-level scope  
In browsers, the top-level scope is the global scope and **this** refers to the global object (like window does):
```
<script>
  console.log(this === window); 	// true
</script>
```
In Node.js, you normally execute code in modules. Therefore, the top-level scope is a special module scope:
```
console.log(Math === global.Math);	// true, **global** refers to the global object
console.log(this !== global);		// true, **this** doesn't refer to the global object
console.log(this === module.exports);	// true, **this** refers to a module's exports
```

---
### this-related pitfalls
If you invoke a constructor and forget the new operator, you are accidently using it as a real function. Hence **this** doesn't have the correct value. In sloppy mode, **this** is window and you'll create global variables:
```
function Point(x, y) {
  this.x = x;
  this.y = y;
}
var p = Point(7, 5);
console.log(p === undefined): 		// true
console.log(x);				// 7
console.log(y);				// 5
```

---
#### ECMAScript6 arrow functions - functions without their own ***this***
The **this** of an arrow function can not be influenced via .call() or in any other way.
```
function ordinary() {
  const arrow = () => this;
  console.log(arrow.call('goodbye'));	// 'hello'
}
ordinary.call('hello');
```

---
#### interview questions: 
```
var myObject = {
    foo: "bar",
    func: function() {
        var self = this; // self === myObject
        console.log("outer func:  this.foo = " + this.foo);     // outer func:  this.foo = bar
        console.log("outer func:  self.foo = " + self.foo);     // outer func:  self.foo = bar
        (function() {
            console.log("inner func:  this.foo = " + this.foo); // inner func:  this.foo = undefined
            console.log(this === window);                       // true
            console.log("inner func:  self.foo = " + self.foo); // inner func:  self.foo = bar
        }());
    }
};
myObject.func();
```

```
var hero = {
    _name: 'John Doe',
    getSecretIdentity: function (){
        return this._name;
    }
};

var stoleSecretIdentity = hero.getSecretIdentity;               // extracting the method from the hero object

console.log(stoleSecretIdentity());                             // undefined
console.log(hero.getSecretIdentity());                          // John Doe

var stoleSecretIdentity = hero.getSecretIdentity.bind(hero);
console.log(stoleSecretIdentity());				// John Doe
```

```
function returnThis() {
  return this;
}
const bound = returnThis.bind('hello');
bound();							// hello
bound.call(undefined);						// hello
```

```
var length = 10;
function fn() {                                                 // function declaration
  console.log(this.length);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();                                                      // 10
    arguments[0]();                                            // 2
  }
};

obj.method(fn, 1);
```

```
var x = 21;
var girl = function () {
    console.log(x);                                            // undefined
    var x = 20;
};
girl ();
```
