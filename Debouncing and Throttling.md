Debouncing limite the time that needs to pass by until a function is called again, 
group serveral function calls into one and execute it only once after some time has elapsed. 

```
function debounce(fn, delay) {
  let timer = null;
  
  return function() {
    let context = this;
    let args = arguments;
    
    clearTimeout(timer);
    timer = setTimeout(function() {
      fn.apply(context, args);
    }, delay);
  }
}

function foo() {
  console.log('You are scrolling!');
}

let elem = document.getElementById('container);
elem.addEventListener('scroll', debounce(foo, 2000));
```

Throttling spreads the functoin calls across a longer time interval. 
So if an event occurs 10 times within 100 milliseconds, throttling could spread out each of function calls to be exectued once every 2 seconds instead of firing within 100 milliseconds.
