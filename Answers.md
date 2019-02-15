# Answers

1.  What is React JS and what problems does it try and solve?

- ReactJS is a library from the Facebook team and used in popular applications like Facebook and Instagram. Since some apps deal with a lot of information, React tries to make things more scalable and reusable in an unopinionated manner.

React uses the virtual DOM and JSX as ways to make the process more streamline and efficient. Basically, the virtual DOM handles all the mechanics behind the scene to compare the changes between the virtual DOM and the actual DOM and updates only what is necessary. This process is more efficient since manipulations directly to the DOM are expensive. JSX is a way to write HTML in Javascript and helps us more easily render out components. There are other days to create apps such as VueJS or AngularJS.

2.  What does it mean to _think_ in react?

- To think in react means to break out UI components into smaller pieces to make app more modular and resuable. The general rule to follow is that a component should do one thing and one thing well. If it's too big, it should be broken down into smaller components. This also includes thinking about which components should be class/functional components, where state will exist, what the shape of the component tree is, and how modular you want to abstract away from the UI.

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

A class component is a more advance component that has a constructor, a state, and also methods contained within. A functional component is meant more for just rendering out presentational components. Having class means that you also have to take care of passing down the state and methods to child components lower in the tree. The recommendation I understand is to write more functional component since it is more performant and easier to deal with as an application scales.

4.  Describe state.

State is an object that exists inside the constructor of a class component. Although a class component can be stateless, most of the time there is a state that is used to hold information and functional components are used instead. State is useful to have a "single source of truth" so you can know exactly where the data exists. The convenient thing is that once this data is changed centrally, all the components that share this property in state also updates and re-renders accordingly. Following the functional programming paradigm, state should not be updated directly and .setState() method should be used instead.

5.  Describe props.

Props is data that is passed from a parent component to a child component including properties and methods. Props are usually coming from the state in the App component but it can also be attributes passed from other components. Usually the prop flow is top to bottom in the tree and involves a bit of "prop-drilling" to create this chain of information. However, there are other methods of grabbing information directly from the top no matter how deeply nested your component is. One such example is using context.
