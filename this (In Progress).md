References:  
https://2ality.com/2014/05/this.html  
https://2ality.com/2017/12/alternate-this.html

---
Partition the locations where **this** can be used into three categories:
* In function: this is an extra, often implicit, parameter.
* Outside functions (in the top-level scope): this refers to the global object in browsers and to a modules' exports in Node.js.
* In a string passed to eval(): ??????

---
### this in functions
#### this in real function
1. this is an implicit parameter that is set to a default value
* this refers to the global object (window in browsers) in sloppy mode. 
* this is undefined in strict mode.
2. Make a function call via call() or apply() and specify the value of this explicitly

```
function sloppyFunc() {
  console.log(this === window);
}
sloppyFunc();                           // true

function strictFunc() {
  'use strict';
  console.log(this === undefined);
}
strictFunc();                           // true
```

#### (Important) this in constructors
1. Functions become constructors if you invoke them via the new operator.
2. That operator creates a new object and passes it to the constructor via this.
3. In other words, this refers to the newly created instance.

```
var savedThis;
function Constr() {
  savedThis = this;
}
var inst = new Constr();
console.log(savedThis === inst);        // true
```

#### this in methods
1. this refers to the receiver, the object on which the method has been invoked.

```
var obj = {
  method: function() {
    console.log(this === obj);          // true
  }
}
obj.method();
```
---
### this-related pitfalls
#### Pitfall: forgetting new


---
#### Some interview questions: 
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
    arguments[0]();                                            // 2 !!!!!!!!!!!!!important
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
