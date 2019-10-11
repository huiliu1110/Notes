References:  
https://medium.com/javascript-scene/master-the-javascript-interview-what-is-a-promise-27fc71e77261  

---
A promise is an object that may produce a single value some time in the future.
1. a resolved value
2. a reason that it's not resolved (e.g., a network error occurred).  

A promise will be in one of 3 possible states: fulfilled, rejected, pending.  
1. Fulfilled: onFulfilled() will be called (e.g., resolve() was called)
2. Rejected: onRejected() will be called (e.g. reject() was called)
3. Pending: not yet fulfilled or rejected  
4. Note: Settled: A promise is settled if it's not pending (it has been resolved or rejected).

Promise users can attach callbacks to handle the fulfilled value or the reason for rejection.  
A promise will start doing whatever task you give it as soon as the promise constructor is invoked.  
A promise is an object which can be returned synchronously from an asynchronous function.  



---































#### Other References (very hard to understand):  
https://exploringjs.com/es6/ch_async.html  
https://exploringjs.com/es6/ch_promises.html    

---
#### (Skip) The JavaScript call stack

When a function f calls a function g, g needs to know where to return to (inside f) after it is done. This information is usually managed with a stack, the **call stack**.

1. Initially, the program below is started, the call stack is empty.
2. After the function call f(3) in line D, the stack has one entry.
3. After the function call g(x + 1) in line C, the stack has two entries.
4. After the function call h(y + 1) in line B, the stack has three entries.
5. The stack trace printed in line A shows you what the call stack looks like.
6. Next, each of the functions terminates and each time the top entry is removed from the stack.
7. After function f is done, we are back in global scope and the call stack is empty, which means that the program terminates.

```
function h(z) {
  console.log(new Error().stack);           // line A: Print stack trace
}
function g(y) {
  h(y + 1);                                 // line B
}
function f(x) {
  g(x + 1);                                 // line C
}
f(3);                                       // line D
```

```
Error
    at h (<anonymous>:2:15)
    at g (<anonymous>:5:3)
    at f (<anonymous>:8:3)
    at <anonymous>:10:1
```

#### 
