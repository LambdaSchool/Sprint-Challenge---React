# Answers

1. What is React JS? How does it differ from other JavaScript frameworks? 
   * React approaches building UI by breaking everthing down into components.  It uses a virtual dom and allows you to type html directly in your JS.

2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.
   * it is the flow of events from Initialzation to Unmounting. 
   * componentDidMount, this is where you want to load in your data.
   * componentDidUpdate, this executes after a component renders
   * componentWillUnmount, removes componet from the dom

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
   * a class component has a state that can interacted with.  a fuctional component is used when you just want to take data and display it 

4. Briefly describe PropTypes and what we use them for when building react applications.
   * PropTypes is a way to validate the data inside your app.  It is only used in development mode.  This way you can check that the data you are working with is the type of data you intended to be working with