Hooks let you use state and other React features without writing a class.

Motivation:
- It's hard to reuse stateful logic between components.
  - render props
  - higher-order components
  - providers/consumers
  - Your own Hooks!!
- Complex componennts become hard to understand. Mutually related code that changes together gets split apart, but completed unrelated code ends up combined in a single method.
  - recompose: combine React with a separate state management libary that often introduces too much abstraction.
  - the Effect Hook: let you split one component into smaller functions based on what pieces are related, rather than forcing a split based on lifecyle methods.
- Classes confuse both people and machines.
  - Hooks let you use more of React's features without classes.
  - Hooks does not work inside classes.
  
---

#### useState()
- useState() returns a pair: the current state value and a function that lets you update it.
- The only argument to useState is the inital state, and the initial state argument is only used during the first render.
- React assumes that if you call useState() many times, you do it in the same order during every render.

#### useEffect()
- Side effects: data fetching, subscriptions, or manully changing the DOM from React components
  - can affect other components.
  - can not be done during rendering.
- The useEffect() Hook serves the same purpose as componentDidMount, componentDidUpdate, componentWillUnmount in React classes, but unified into a single API.
- By default, React runs the effects after every render, including the first render.
- Effects may also optionally specify how to clean up after them by returning a funciton, React would call clean up function when the component unmounts, as well as before re-running the effect due to a subsequent render.

#### Hooks
- Only call Hooks at the top level. Don't call Hooks inside loops, conditions, or nested functions.
- Only call Hooks from React function components, or your own custom Hooks.

---

