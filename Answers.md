# Answers

1.  What is React JS and what problems does it try and solve?

React JS is a JavaScript library that allows the user to create rich interfaces
involving lots of data, while simplifying and abstracting out some of the more
onerous aspects of DOM manipulation. It allows for efficient handling of data
and DRYer code with reusable components that can easily access said data.

2.  What does it mean to _think_ in react?

Thinking in react means thinking in terms of components (class and functional
types), and how those components interact with each other through the passing
of data in the form of props between them. Tie all that together using the JSX
syntax to efficiently build out interfaces that present data to the user
dynamically.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A Class/Stateful component holds special data called state. These components
are the key to creating a dynamic interface for the user. Class components
have access to all of the React.Component methods.

Functional components are relatively static, and change only if the data that is
passed to them through props changes. Mainly used for presentation purposes.

4.  Describe state.

State is where a class component's data is stored. It is an immutable object, so
state can not be changed directly, only with the setState() method. state data
can be passed down to other components in the form of props.

5.  Describe props.

Props are information that is passed into React components. In JSX, they read
like HTML attributes. They are how data is moved between components. They can
be displayed by React through a process known as interpolation.
