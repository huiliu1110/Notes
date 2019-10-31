References:  
1. https://reactjs.org/docs/faq-internals.html
2. https://reactjs.org/docs/reconciliation.html
3. https://www.codecademy.com/articles/react-virtual-dom
4. https://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/


DOM stands for Document Object Model.
The problem is DOM manipulation is slow and browser-specific.

---

#### Virtual DOM object
In React, for every DOM object, there is a corresponding "virtual DOM object". A virtual DOM object is a representation of a DOM object, like a lightweight copy. A virtual DOM object has the same properties as a real DOM object, but it lacks the real thing's power to directly change what's on the screen. Manipulating the virtual DOM is much faster, because nothing gets drawn onscreen.

#### Declarativeness
Instead of low-level techniques like traversing the DOM tree manually, you simple declare how a component should look like. React does the low-level job for you - the HTML DOM API methods are called under the hood.

#### Reconciliation
When a component’s props or state change, React decides whether an actual DOM update is necessary by comparing the newly returned element with the previously rendered one. When they are not equal, React will update the DOM. This process is called "reconciliation".

#### Diffing
Once the virtual DOM has updated, then React compares the virtual DOM with a virtual DOM snapshot that was taken right before the update, and figures out exactly which virtual DOM objects have changed. This process is calling "diffing".

#### Summary
When you render a JSX element, every single virtual DOM object gets updated. Once the virtual DOM has updated, then React compares the virtual DOM with a virtual DOM snapshot that was taken right before the update, and figures out exactly which virtual DOM objects have changed. Once React knows which virtual DOM objects have changed, then React updates those objects and only those objects, on the real DOM.
React can update only the necessary parts of the DOM.



Please read the docs two times a day and keep doing this for one month. 
