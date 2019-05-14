A closure gives you access to an outer function's scope from an inner function.
Closures can be used for things like implementing privacy and creating function factories.

closures allows inner function to access the variables in the outside function in which it is declared. Below MDN example explains it very well.

```
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  
  function displayName() { // displayName() is the inner function, a closure
    alert(name);  // use variable declared in the parent function
  }
  displayName();
}
init();
```

currying a.k.a. partially applied function
In javascript, function can return a function. Because of that we can call the returned function with variety of arguments.
For example,
- We can pass arguments as usual we do to all the functions
- We can use variables from its parent function where it the function was declared via closure
- We can partially process the arguments before passing it to the returned function via closure
- We can prefix these arguments with some value and so forth.

So, this idea of calling the return function with variety of arguments is called currying. 


- Implement the compound function which returns a function and satisfies the following condition

```
function add10 (a) {
  return a + 10
}

function compound (f) {
  return function (b) {
    return f(f(b));
  }
}
console.log(add10(10)) // 20
console.log(compound(add10)(10)) // 30
```

- Write a function say which logs the following.

```
console.log(say('Foo')('bar')()) // => "Foo bar"
console.log(say('Hi')('my')('name')('is')('Foo')()) // "Hi my name is Foo "

let sentence = ''

function say() {
  if (!arguments[0]) {
    let s = sentence;
    sentence = '';
    return s;
  } else {
    sentence += arguments[0] + ' ';
    return say;
  }
}
```

- Implement setInterval using setTimeout in javascript
```

```

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
