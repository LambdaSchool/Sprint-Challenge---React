# Answers

1. What is React JS and what problems does it try and solve?

	React JS is a library in Javascript that allows to easily manipulate a virtual DOM that is then compared to the actual DOM and makes any changes made as a result of user interaction.

2. What does it mean to _think_ in react?

	Thinking in react is about thinking how components communicate and interact with each other. How is information passed from one to the other?  What needs to change when and how?

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
	
	Stateful components hold information that is stored and referred to when determining what is to be rendered to the DOM.
	Presentational components simply structure how an element is rendered.

4. Describe state.

	State is just data that when changed through setState() rerenders the DOM with the changes made.

5. Describe props.

	Props is how we pass information down through child components. Any information we want contained in other components will be set to props.