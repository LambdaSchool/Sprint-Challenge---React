import React, { Component } from 'react';
import './App.css';
import CharacterList from "./components/CharacterList/CharacterList";
import { Button } from 'reactstrap';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: []
    };
  }
  componentDidMount() {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch('https://swapi.co/api/people/')
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data.results);
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });

  }

  render() {
    console.log(this.state.starwarsChars);
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <CharacterList
          list={this.state.starwarsChars}
          name="xang"
          />
      </div>
    );
  }
}

export default App;
