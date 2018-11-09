import React, { Component } from 'react';
import './App.css';
import WarsContainer from './components/WarsContainer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      next: null,
      prev: null
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
      console.log(data)
      this.setState({
        starwarsChars: data.results,
        next: data.next,
        prev: data.previous });
    })
    .catch(err => {
      throw new Error(err);
    });
  };


  loadNextPage = () => {
    this.getCharacters(this.state.next);
  };

  loadPrevPage = () => {
    this.getCharacters(this.state.prev)
  }
  
  
  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <WarsContainer
          starwarsChars={this.state.starwarsChars}
        />
        <div className="pagination-container" >
          {this.state.previous === null ? null : ( <button className="pagination" onClick={this.loadPrevPage} loadPrevPage={this.loadPrevPage}>Previous Page</button> ) }
          {this.state.next === null ? null : ( <button className="pagination" onClick={this.loadNextPage} loadNextPage={this.loadPrevPage}>Next Page</button> ) }
        </div>
        <h6>All data received from <a href="https://swapi.co/api/people">StarWars API</a></h6>
      </div>
    );
  }
}

export default App;
