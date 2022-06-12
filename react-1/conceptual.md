### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

React is a declarative, efficient, and flexible JavaScript library for building user interfaces.
Popular, powerful front-end framework.
Developed by and sponsored by Facebook.

Make it easy to make reusable “view components”
These “encapsulate” logic and HTML into a class
Often make it easier to build modular applications
React allows developers to create large web applications that can change data, without reloading the page.

- What is Babel?
Babel is a JavaScript transpiler that converts edge JavaScript into plain old ES5 JavaScript that can run in any browser (even the old ones).

It makes available all the syntactical sugar that was added to JavaScript with the new ES6 specification, including classes, fat arrows and multiline strings.

- What is JSX?
JSX is an XML/HTML-like syntax used by React that extends ECMAScript so that XML/HTML-like text can co-exist with JavaScript/React code. The syntax is intended to be used by preprocessors (i.e., transpilers like Babel) to transform HTML-like text found in JavaScript files into standard JavaScript objects that a JavaScript engine will parse.

Basically, by using JSX you can write concise HTML/XML-like structures (e.g., DOM like tree structures) in the same file as you write JavaScript code, then Babel will transform these expressions into actual JavaScript code.

- How is a Component created in React?
The building blocks of React
Pieces of UI & view logic
Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.

Components come in two types, Class components and Function components, 

The component also requires a render() method, this method returns HTML.

- What are some difference between state and props?
Props are arguments passed into React components.
Props are passed to components via HTML attributes.

ex: Add a "brand" attribute to the Car element:

const myElement = <Car brand="Ford" />;

State:React components has a built-in state object.
The state object is where you store property values that belongs to the component.
When the state object changes, the component re-renders.


- What does "downward data flow" refer to in React?
Unidirectional data flow describes a one-way data flow where the data can move in only one pathway when being transferred between different parts of the program.

React, a Javascript library, uses unidirectional data flow. The data from the parent is known as props. You can only transfer data from parent to child and not vice versa.

This means that the child components cannot update or modify the data on their own, makeing sure that a clean data flow architecture is followed. This also means that you can control the data flow better.

- What is a controlled component?
A Controlled Component is one that takes its current value through props and notifies changes through callbacks like onChange. A parent component "controls" it by handling the callback and managing its own state and passing the new values as props to the controlled component. You could also call this a "dumb component".



- What is an uncontrolled component?
A Uncontrolled Component is one that stores its own state internally, and you query the DOM using a ref to find its current value when you need it. This is a bit more like traditional HTML.

- What is the purpose of the `key` prop when rendering a list of components?
React uses the key prop create a relationship between the component and the DOM element. The library uses this relationship to determine whether or not the component should be re-rendered. It is not recommended to use the index of the array as the key prop if you know the array will not be static.

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
Using a unique key (over an index value) increases performance. If you use an index and your array values shuffle around, the index is no longer unique and React cant diff the objects optimally. 

- Describe useEffect.  What use cases is it used for in React components?
React comes with a built in hook for “side effects”
Fetching data, starting a timer, and manually changing the DOM are all side effects
Each render has its own effects
Sometimes these effects require clean-up (clearing a timeout, closing a connection)
useEffect will run after the first render
useEffect will run after all rerenders by default
useEffect accepts a callback function as its first argument
useEffect returns undefined or a function
If you return a function, the function will be run before the component unmounts or before the effect runs again

useEffect arguments
2nd argument to useEffect
You can tell React to skip applying an effect if certain values haven’t changed between re-renders.
useEffect accepts an array as its second argument where you place these values (also called dependencies)
What you pass to the array can help avoid performance issues 
If you want to run an effect and clean it up only once (on mount and unmount), you can pass an empty array ([]) as a second argument.

This tells React that your effect doesn’t depend on any values from props or state, so it never needs to re-run.

Be careful about using this pattern when your effect does depend on props or state, as React will give you a warning.

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

- When would you use a ref? When wouldn't you use one?
useRef is another built-in hook in React.
It returns a mutable object with a key of current, whose value is equal to the initial value passed into the hook.
The object persists across renders (so it’s like a local variable, but independent of state).
Mutating the object does not trigger a re-render.
Common Applications of useRef
Accessing an underlying DOM element
Setting up / clearing timers

- What is a custom hook in React? When would you want to write one?
Custom Hooks
A JavaScript function that typically uses built in hooks
The function name of a custom hook should start with use (useToggleState)
Custom hooks can be reusable across different components

When Should I Write My Own Hooks?
General Tips
You don’t have to write custom hooks, but there are a number of situations where they can be useful.

Same business logic inside of multiple components? Maybe a custom hook can help.
Business logic cluttering up a single component? Maybe a custom hook, even if only for one component, can help with readability.
Don’t start by asking what custom hooks you need; lean on custom hooks to help you refactor your code.