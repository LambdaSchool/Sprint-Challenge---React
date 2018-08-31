import React, { Component } from 'react';
import './App.css';
import StarwarsList from './components/StarwarsList'
import Search from "./components/Search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      inputText: ''
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

  changeInput = (event) => {
    this.setState({ inputText: event.target.value })
  }

  

  render() {
    return (
      <div className="App container">
        <h1 className="Header">React Wars</h1>
        <Search 
          inputText = {this.state.inputText}
          changeInput = {this.changeInput}
        />
        <StarwarsList 
          starChar={this.state.starwarsChars}
          inputText ={this.state.inputText}
        />
        
      </div>
    );
  }
}

export default App;
