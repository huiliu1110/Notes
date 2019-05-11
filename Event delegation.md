```
<ul id="todo-app">
  <li class="item">Walk the dog</li>
  <li class="item">Pay bills</li>
  <li class="item">Make dinner</li>
  <li class="item">Code for one hour</li>
</ul>
```

```
document.addEventListener('DOMContentLoaded', function() {
  let app = document.getElementById('todo-app');
  let items = app.getElementsByClassName('item');
  
  for (let item of items) {
    item.addEventListener('click', function() {
      alert('you clicked on item: ' + item.innerHTML);
     });
  }
});
```

```
document.addEventListener('DOMContentLoaded', function() {
  let app = document.getElementById('todo-app');
  
  app.addEventListener('click', function(e) {
    if (e.target && e.target.nodeName === 'LI') {
      let item = e.target;
      alert('you clicked on item: ' + item.innerHTML);
    }
  });
}
```
