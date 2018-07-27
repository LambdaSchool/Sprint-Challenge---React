# Answers

1.  What is React JS and what problems does it try and solve?
React is a JavaScript library for building user interfaces. It is essentially code that makes it easier to interact with elements and
build dynamic components. React uses an engine called the Virtual DOM to update changes. The Virtual DOM creates an in memory
data structure cache, so when a page is loading it only changes what needs to be changed. React allow us to build large, complex dynamic
web applications more easily, and it lets those large web applications load much faster with the Virtual DOM and caches.


2.  What does it mean to _think_ in react?
Thinking in React means to break the User Interface down into different components. Components should each have their own
function or responsibility.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
Functional components are simple functions that return chunks of UI. They can access props, but cannot have a state. They focus
mostly of the UI. Class Components are made by extending from React.Component, and they can have state and access props by using
the "this" keyword.

4.  Describe state.
State stores data that can be used over time. It's internal data that affects the rendering of components. Whenever state is
changed, components will re-render to reflect the new state.

5.  Describe props.
All React components have access to the props keyword, which allows you to pass data from a parent component to a child component.
Props are read only, and changes in props will trigger React to re-render the component.
