Nice reading:
1) Iterators: https://codeburst.io/a-simple-guide-to-es6-iterators-in-javascript-with-examples-189d052c3d8e
2) Generators: https://medium.com/dailyjs/a-simple-guide-to-understanding-javascript-es6-generators-d1c350551950


---
#### Iterators

Loop over the array:
```
const myFavouriteAuthors = [
  'Neal Stephenson',
  'Arthur Clarke',
  'Isaac Asimov',
  'Robert Heinlein'
];

// For loop
for (let index = 0; index < myFavouriteAuthors.length; index++) {
  console.log(myFavouriteAuthors[index]);
}

// while loop
let index = 0;
while (index < myFavouriteAuthors.length) {
  console.log(myFavouriteAuthors[index];
  index++;
}

// for-of loop
for (const value of myFavouriteAuthors) {
  console.log(value);
}
```
Loop over custom data structure:
```
const myFavouriteAuthors = {
  allAuthors: {
    fiction: [
      'Agatha Christie',
      'J. K. Rowling',
      'Dr. Seuss'
    ],
    scienceFiction: [
      'Neal Stephenson',
      'Arthur Clarke',
      'Isaac Asimov',
      'Robert Heinlein'
    ],
    fantasy: [
      'J. R. R. Tolkien',
      'J. K. Rowling', 
      'Terry Pratchett'
    ]
  }
}
```

for-of loop:
```
for (let author of myFavouriteAuthors) {
  console.log(author)
}
// TypeError: myFavouriteAuthors is not iterable
```

Add a method to return all the data:
```
const myFavouriteAuthors = {
  allAuthors: {
    fiction: [
      'Agatha Christie',
      'J. K. Rowling',
      'Dr. Seuss'
    ],
    scienceFiction: [
      'Neal Stephenson',
      'Arthur Clarke',
      'Isaac Asimov',
      'Robert Heinlein'
    ],
    fantasy: [
      'J. R. R. Tolkien',
      'J. K. Rowling', 
      'Terry Pratchett'
    ]
  },
  getAllAuthors() {
    const authors = [];
    
    for (const author of this.allAuthors.fiction) {
      authors.push(author);
    }
    
    for (const author of this.allAuthors.scienceFiction) {
      authors.push(author);
    }
    
    for (const author of this.allAuthors.fantasy) {
      authors.push(author);
    }
    
    return authors;
  }
}
```

> ECMA standardize this process of looping over custom objects, and used `Symbol.iterator` to name the method. 
> 1) Symbols offer names that are unique and cannot clash with other property names. 
> 2) `Symbol.iterator` will return an object called an `iterator`.
> 3) `iterator` will have a method called `next`.
> 4) `next` will return an object with keys `value` and `done`. `value` will contain the current value, it can be of any type. `done` is boolean, denotes whether all the values have been fetched or not. 
> 5) The relation between `iterables`, `iterators`, and `next` is called the Iteration Protocol.

Make myFavouriteAuthors iterable:
```
const myFavouriteAuthors = {
  allAuthors: {
    fiction: [
      'Agatha Christie',
      'J. K. Rowling',
      'Dr. Seuss'
    ],
    scienceFiction: [
      'Neal Stephenson',
      'Arthur Clarke',
      'Isaac Asimov',
      'Robert Heinlein'
    ],
    fantasy: [
      'J. R. R. Tolkien',
      'J. K. Rowling', 
      'Terry Pratchett'
    ]
  },
  [Symbol.iterator]() {
    const genres = Object.values(this.allAuthors);
    // [["Agatha Christie", "J. K. Rowling", "Dr. Seuss"],
    //  ["Neal Stephenson", "Arthur Clarke", "Isaac Asimov", "Robert Heinlein"],
    //  ["J. R. R. Tolkien", "J. K. Rowling", "Terry Pratchett"]]
    
    const authors = genres.reduce((acc, genre) => acc.concat(genre), []);
    
    let authorIndex = 0;
    
    return {
      next() {
        let value = authors[authorIndex];
        let done = authorIndex >= authors.length;
        authorIndex++;
        
        return {
          value,
          done
        }
      }
    };
  }
}

const iterator = myFavouriteAuthors[Symbol.iterator]();
iterator.next();
// {value: "Agatha Christie", done: true}
iterator.next();
// {value: "J. K. Rowling", done: true}
iterator.next();
// {value: "Dr. Seuss", done: true}
```
---
#### Generators

Functions in JavaScript, **run until return/end**  
Generator functions, **run until yield/return/end**

> 1. Once created, calling the generator function returns the Generator Object, 
> 2. which holds the entire Generator Iterable that can be iterated using next() method or for...of loop.
> 3. The generator object needs to be assigned to a variable to keep track of the subsequent next() methods called on itself.
> 4. If the generator is not assigned to a variable then it will always yield only till first yield expession on every next(). 

Every next() call on the generator executes every line of code until the next yield it encounters and suspends its execution temporarily.  
On each next() call, returns its value in the form of an object containing the following parameters.
1. value - is everything that is written on the right side of the yield keyword, or the value of return statement.
2. done - indicates the status of the generator, whether it can be executed further or not. 

```
function* generatorFunction(i) {
  yield i;
  yield i + 1;
}
let generator = generatorFunction(5);

console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: 6, done: false}
console.log(generator.next()); // {value: undefined, done: true}
```

```
function* generatorFunction(i) {
  yield i;
  yield i + 1;
  return i;
}
let generator = generatorFunction(5);

console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: 6, done: false}
console.log(generator.next()); // {value: 5, done: true}
```

If the generator is not assigned to a variable:
```
function* generatorFunction(i) {
  yield i;
  yield i + 1;
}
console.log(generatorFunction(5).next()); // {value: 5, done: false}
console.log(generatorFunction(5).next()); // {value: 5, done: false}
```

Assigning Yield to a variable:
```
function* generatorFunction() {
  const x = yield 1;
  console.log(x);
  const y = yield 2;
  console.log(y);
}
let generator = generatorFunction();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // undefined {value: 2, done: false}
console.log(generator.next()); // undefined {value: undefined, done: true}
```

> **Passing arguments to the next() Method:**
> 1. Starting from second next(), the previous yield is replaced with arguments passed in the next function.
> 2. The next() method called without any arguments essentially means that the entire previous yield expression is undefined.
```
function* generatorFunction(i) {
  console.log(i);
  const j = 5 * (yield (i * 10));
  console.log(j);
  const k = yield (2 * j / 4);
  console.log(k);
  return (i + j + k);
}
let generator = generatorFunction(10);

console.log(generator.next(20)); // 10 {value: 100, done: false}
console.log(generator.next(10)); // 50 {value: 25, done: false}
console.log(generator.next(5));  // 5 {value: 65, done: true}
```

Passing Yield as an argument of a function:
```
function* generatorFunction() {
  yield;
  foo(yield "Hello");
}
function foo(x) {
  console.log(`Just printing argument passed ${x}`);
}
let generator = generatorFunction();

console.log(generator.next()); // {value: undefined, done: false}
console.log(generator.next()); // {value: "Hello", done: false}
console.log(generator.next()); // "Just printing argument passed undefined" {value: undefined, done: true}
```

Yield with a function call:
```
function* fetchUser() {
  const user = yield getData();
  console.log(user);
}
function getData() {
  return {name: "Hui"};
}
let fetchGen = fetchUser();

console.log(fetchGen.next().value); // {name: "Hui"}
console.log(fetchGen.next()); // undefined {value: undefined, done: true}
```

Yield with Promise:
```
function* fetchUser(action) {
  const user = yield apiCall();
}
function apiCall() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({name: "Hui"});
    }, 2000);
  });
}
let fetchGen = fetchUser();

console.log(fetchGen.next().value.then(n => console.log(n))); // Promise {name: "Hui"}
```

> **Yield***
> 1. Yield* when used inside a generator function delegates another generator function.
> 2. It synchronously completes the generator function in its expression before moving on to the next line.
```
function* g1() {
  yield 2;
  yield 3;
  yield 4;
}
function* g2() {
  yield 1;
  yield* g1();
  yield 5;
}
let generator = g2();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 3, done: false}
console.log(generator.next()); // {value: 4, done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: undefined: done: true}
```
Above code is same as the one below:
```
function* g2() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 5;
}
```

Yield* with Return:
```
function* genaratorFunctionChild() {
  yield 1;
  yield 2;
  return 'foo';
  yield 3;
}
function* genaratorFunctionMain() {
  const result = yield* genaratorFunctionChild();
  console.log(result);
  yield 'the end';
}
let generator = genaratorFunctionMain();

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // 'foo' {value: 'the end', done: false}
console.log(generator.next()); // {value: undefined, done: true}
```

Yield* with a Built-in Iterable object:
```
function* generatorFunction() {
  yield* [1, 2];
  yield* 'HI';
  yield* arguments;
}
let generator = generatorFunction(5, 6);

console.log(generator.next()); // {value: 1, done: false}
console.log(generator.next()); // {value: 2, done: false}
console.log(generator.next()); // {value: 'H', done: false}
console.log(generator.next()); // {value: 'I', done: false}
console.log(generator.next()); // {value: 5, done: false}
console.log(generator.next()); // {value: 6, done: false}
console.log(generator.next()); // {value: undefined, done: true}
```

> Yield with for...of:
> 1. every iterator/generator can be iterated over a for...of loop.
> 2. for...of loop internally moves on to the next iteration based on the yield keyword.
> 3. for...of iterates only till the last yield and doesn't process the return statements like the next() method.
> 4. Avoid return statements inside a generator function as it would affect the reusability of the function when iterated over a for...of.
```
function* generatorFunctionChild() {
  yield 1;
  yield 2;
  return 'foo';
  yield 3;
}
function* generatorFunctionMain() {
  const result = yield* generatorFunctionChild();
  console.log(result);
  yield 'the end';
}
let generator = generatorFunctionMain();

for (let i of generator) {
  console.log(i);
}
// 1
// 2
// 'foo'
// 'the end'
```

```
function* generatorFunctionChild() {
  yield 1;
  yield 2;
  return 'foo';
  yield 3;
}
function* generatorFunctionMain() {
  const result = yield* generatorFunctionChild();
  console.log(result);
  yield 'the end';
  console.log('the end end');
}
let generator = generatorFunctionMain();

for (let i of generator) {
  console.log(i);
}
// 1
// 2
// 'foo'
// 'the end'
// 'the end end'
```

```
function* generatorFunctionChild() {
  yield 1;
  yield 2;
  return 'foo';
  yield 3;
}
function* generatorFunctionMain() {
  const result = yield* generatorFunctionChild();
  console.log(result);
  yield 'the end';
  console.log('the end end');
  return 'the end end end';
}
let generator = generatorFunctionMain();

for (let i of generator) {
  console.log(i);
}
// 1
// 2
// 'foo'
// 'the end'
// 'the end end'
```

---
Some other references:
1) ECMAScript6 - http://es6-features.org/
2) Exploring ES6 Book - https://exploringjs.com/es6/index.html
3) Elegant patterns in modern JavaScript: RORO https://medium.com/free-code-camp/elegant-patterns-in-modern-javascript-roro-be01e7669cbd
