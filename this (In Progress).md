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
#### this in construcctors

#### this in methods
