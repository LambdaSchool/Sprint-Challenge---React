import React, { Component } from 'react';
import './App.css';
import StarwarsList from './components/StarwarsList'

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
      <div className="App container">
        <h1 className="Header">React Wars</h1>
        <h1>{console.log(this.state)}</h1>
        <StarwarsList starChar={this.state.starwarsChars}/>
        
      </div>
    );
  }
}

export default App;
