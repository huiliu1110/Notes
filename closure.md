A closure gives you access to an outer function's scope from an inner function.
Closures can be used for things like implementing privacy and creating function factories.

- What will the following code output?

```
for (var i = 0; i < 3; i++) {
  setTimeout(function() {
     alert(i);
  }, 1000 + 1);
}
```

```
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('Index: ' + i + ', element: ' + arr[i]);
  }, 3000);
}
```

```
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log('The index of this number is: ' + i);
  }, 3000);
}
```

```
const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
  // pass in the variable i so that each function 
  // has access to the correct index
  setTimeout(function(i_local) {
    return function() {
      console.log('The index of this number is: ' + i_local);
    }
  }(i), 3000);
}
```


```
const arr = [10, 12, 15, 21];
for (let i = 0; i < arr.length; i++) {
  // using the ES6 let syntax, it creates a new binding
  // every single time the function is called
  // read more here: http://exploringjs.com/es6/ch_variables.html#sec_let-const-loop-heads
  setTimeout(function() {
    console.log('The index of this number is: ' + i);
  }, 3000);
}
```

- Write a function that would allow you to do this.

```
var addSix = createBase(6);
addSix(10); // returns 16
addSix(21); // returns 27
```

```
const add = (a, b) => a + b;
const add10 = partialApply(add, 10);
add10(5); // returns 15

const partialApply = (fn, ...fixedArgs) => {
  return function (...remainingArgs) {
    return fn.apply(this, fixedArgs.concat(remainingArgs));
  };
};
```
- How would you use a closure to create a private counter?

```
// Hui writed, the output is correct, but not sure the correct/best answer.
count(); // returns 1;
count(); // returns 2; 
count(); // returns 3;

var count = () => { 
  this.num = (this.num || 0) + 1; 
  return this.num
}
```
