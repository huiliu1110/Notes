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

for-of loop
```
for (let author of myFavouriteAuthors) {
  console.log(author)
}
// TypeError: myFavouriteAuthors is not iterable
```

Add a method to return all the data
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

ECMA standardize this process of looping over custom objects, and used `Symbol.iterator` to name the method. 
1) Symbols offer names that are unique and cannot clash with other property names. 
2) `Symbol.iterator` will return an object called an `iterator`.
3) `iterator` will have a method called `next`.
4) `next` will return an object with keys `value` and `done`. `value` will contain the current value, it can be of any type. `done` is boolean, denotes whether all the values have been fetched or not. 
6) The relation between `iterables`, `iterators`, and `next` is called the Iteration Protocol.

Make myFavouriteAuthors iterable
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

---
Some other references:
1) ECMAScript6 - http://es6-features.org/
2) Exploring ES6 Book - https://exploringjs.com/es6/index.html
