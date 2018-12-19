# Assessing your React Learning

- The purpose of this exercise is to get you used to being quizzed on _Interview Questions_ commonly asked about ReactJS.
- Answers to your written questions will be recorded in _Answers.md_
- This is to be worked on alone but you can use outside resources. You can _reference_ any old code you may have, and the React Documentation, however, please refrain from copying and pasting any of your answers. Try and understand the question and put your responses in your own words. Be as thorough as possible when explaining something.

## Start by forking and cloning this repository.

## Questions

1. What is React JS and what problems does it try and solve?

2. What does it mean to _think_ in react?

3. Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

4. Describe state.

5. Describe props.

## Project

- You're going to be building an application _starwars_ that consumes live data that we're retrieving across the world wide web!
- You will be given architectural liberty here to create the files you will need. It could look very similar to your Todo List you've been building.

1. **cd into starwars** and run `yarn install or npm install` to retrieve all the needed dependencies.
1. Once you have installed all the _node_modules_ you should be able to run `yarn start or npm start` to get your server up and running.
1. Once your server is up and running open Chrome and head over to `localhost:3000` to see your beautiful app. Ok, maybe it's not THAT pretty yet, but it's your goal to ensure this project becomes a thing of beauty.

### If you notice inside of `App.js` we're calling an open sourced **API** from within `componentDidMount()` and saving the results of that API on state.

#### Open up your chrome `React Dev Tools` to peek at the data set on `state` of your `App` component.

- You should see something like this:

![Star Wars state data](starwars_data.png)

- Your goal here is to build an app that displays the data provided in whatever way you see fit! Don't worry about the fields whose values are URLs. You'll figure out what to do with data like that later on in the course.
- For now, just build a react app that displays this fun Star Wars data. Build a card for each object in the starwars array.
- I suggest building **function over form** at first. Then take time to style your app after.

## Stretch Problems

1.  Build a pagination system that will allow you to load the next page of data

- Take note on the data that's coming back from the server call in our `getCharacters`
- console.log() the data coming back from the server.
- Notice that there are `next` `previous` fields that give you a URL.
- You have a function that will get chars called `getCharacters` you'll want to just call this function and supply it with the proper fields. You'll need to set this up on state to do this.

```js
 .then(data => {
    console.log(data); <-- Log data here to find the fields you will need.
    this.setState({ starwarsChars: data.results });
  })
```

1.  Build another app from scratch that looks very similar to this one. Inside of your main `App` component fetch some data in this same fashion from this url `https://dog.ceo/dog-api/#all` you'll have to follow the documentation at that website and figure out how to change up the code you've seen here in this Star Wars app in order to properly fetch the data and store it on Component State.

- Be mindful of the `fetch API` that is now built into most modern browsers [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch).
- Your data coming back from Dogs should be formatted in JSON format.
