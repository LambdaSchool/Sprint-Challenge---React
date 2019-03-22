import React, { Component } from 'react';
import './App.css';
import './components/StarWarsCard';
import StarWarsCard from './components/StarWarsCard';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
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
        <h1 className="Header">React Wars</h1>
        <div className="card-container">
          {this.state.starwarsChars.map(char => <StarWarsCard char={char} key={char.created} />)}
        </div>
      </div>
    );
  }
}

export default App;
