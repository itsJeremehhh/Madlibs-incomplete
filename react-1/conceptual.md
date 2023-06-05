### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?
    a front end framework developed by Facebook.

- What is Babel?
    A library to translate javascript to work on all browser versions

- What is JSX?  
  allows us to write HTML in javascript

- How is a Component created in React?
    You create a seperate file to define the functions of the compenant then render it into the main app

- What are some difference between state and props?
    State is a value that can be updated or altered 
    props is a property set into an element that can be accessed


- What does "downward data flow" refer to in React?
    The passing of data or functions via props from parent to child components

- What is a controlled component?
    a component that is controlled by React state

- What is an uncontrolled component?
    a compnent that maintains its own internal state.

- What is the purpose of the `key` prop when rendering a list of components?
    It helps react identify which components have changed. 

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    It can cause performance issues with react causing it to be unstable

- Describe useEffect.  What use cases is it used for in React components?
    a built in hook for side effects
    to fecth data from an external source or API once a page renders.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?
    a built in React hook that returns a mutable object. The value is equal to the initial value passed into the hook. It does not cause a rerender of the components


- When would you use a ref? When wouldn't you use one?
    Accessing an underlying DOM elements or timers. They should not be used to change the DOM in anyway

- What is a custom hook in React? When would you want to write one?
    a Custom hook in react is a function that you will need to call upon multiple times. Reduces repeated functions.
