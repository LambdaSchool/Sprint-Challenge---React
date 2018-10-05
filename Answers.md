# Answers

1.  What is React JS and what problems does it try and solve?

React is a JavaScript library that is used for building user interfaces. Unlike vanilla JavaScript's method of directly manipulating the DOM to create interactive user interfaces, React uses a paradigm called Virtual DOM. Virtual DOM essentially abstracts away direct manipulation of the DOM with its own algorithm. This algorithm efficiently decides what changes needed to be made to the actual DOM, then it rerenders the specific pieces of DOM that need to be re-rendered. The process is, in comparison to the previous method, significantly better in efficiency and performance when dealing with multiple data changes.  

2.  What does it mean to _think_ in react?

To _think_ in react means, in the most simplist of terms, writing very explicit and modular code. React is all about one-way data flow down the component hiearchy, hence why the data flow in the code is very explicit, or easy to follow. Following this unidirectional data flow also allows for components to be very reusuable, hence the code being modualar.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A Class/Stateful component has access to React's curated lifecycle methods, which gives us control into how our components work. With good practice, these components generally provide the data and behavior to our functional/presentational components. Functional/presentational components generally, with good practice, are concerned with how things look, by receiving data from their container components.

4.  Describe state.

A serialiazable representation of one point in time--a snapshot--or the current "state" of the component. Basically, a component can use state to help render changes in the UI. An important thing to note is that state is private - only the component can affect its own state.

5.  Describe props.

Props are basically properties. Props are how components communicate with each other. Props are also immutable. 