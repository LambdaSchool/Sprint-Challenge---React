import React, { Component } from 'react';

import LeftButton from './components/leftButton';
import RightButton from './components/rightButton';
import Cards from './components/cards';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      next: '',
      previous: '',
      starwarsChars: []
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ next: data.next, previous: data.previous, starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  handleLeftClick = () => {
    const { previous } = this.state;
    if (previous) this.getCharacters(previous);
  };

  handleRightClick = () => {
    const { next } = this.state;
    if (next) this.getCharacters(next);
  };

  render() {
    return (
      <div className="App">
        <div className="title">
          <LeftButton handleClick={this.handleLeftClick} />
          <h1 className="Header">React Wars</h1>
          <RightButton handleClick={this.handleRightClick} />
        </div>
        <Cards starwars={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
