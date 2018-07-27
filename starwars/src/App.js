import React, { Component } from 'react';
import './App.css';
import StarWarsCard from './StarWarsCard.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };
  
  render() {
    return (
      <div className="App">
        {this.state.starwarsChars.map((e)=><StarWarsCard starProp={e}/>)};
      </div>
    );
  }
}

export default App;
