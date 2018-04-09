# Answers

#1. What is React JS? How does it differ from other JavaScript frameworks?

## React is a UI library utilizing the JS framework to streamline the process of building web applications. React deals mainly in composing the individual Components to deliver a fully functional UI experience. It does this by way of a Virtual DOM which acts as a kind of mediator between the browser and the developer. The Virtual DOM makes the process of interacting with the DOM a seamless task by tracking changes that occur on the page and updating them accordingly. The Virtual DOM is what makes React profoundly unique as opposed to other JS frameworks.

#2. Explain briefly the React Component Lifecycle. Name three of the methods that are a part of the lifecycle and what they do.

## The React Component Lifecycle is, to my best understanding, the idea that we can control the individual components of the app we're building. We can control when it renders, updates, and renders again. It's a process by which we can control when things are happening on the page, when they're being accessed, possibly even when they won't appear at all given certain circumstances. Some of the methods that we utilize in the lifecycle method are as follows:

## componentDidMount, componentWillReceiveProps, and componentWillMount: each of these handles a different part of the React Component Lifecycle. componentDidMount allows us to use a component and start gathering data. componentWillReceiveProps does exactly what it says in that if a new set of props are introduced, we then use this lifecycle process to make sure that our components will be taking on the new props. It's like giving permission to a component to change some of its attributes. Finally, componentWillMount is the start of the whole process. It's basically setting the stage for the components to be used going forward.

#3. Briefly describe some of the differences between a `Class/Stateful component` and a `Functional/Presentational component`.

## The biggest difference between `functional components` and `class components` is the extent to which one can be customized. The former is simply a function with a singular optional input that we call `props`. The latter is more customizable and can have a `state`. Typically, when we want something to remain the same, we'd simply assign a component to const and make it a stateless function. If we want our component behave differently at different points in the interaction with the UI, we'd assign our component to a class which allows us to control the various states of the interaction (tapping into some lifecycle processes here).

#4. Briefly describe PropTypes and what we use them for when building react applications.

## PropTypes are allow us to check that we're sending the right data between components. We don't have to use PropTypes when we're creating apps with React, but it helps to ensure that we're not passing the wrong data into certain components so we have a consistent and seamless user interface. It could also be seen as a way of labeling and compartmentalizing the data that we're passing around.