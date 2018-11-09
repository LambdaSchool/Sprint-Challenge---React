import React, { Component } from 'react';
import './App.css';
import StarWarsList from './components/StarWarsList';
import StarWarsForm from './components/StarWarsForm';



class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
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
      <div className='main-container'>

        <h1 className="Header">React Wars</h1>

        <div className="App">
          

          {/* <StarWarsList 
            characters={this.state.starwarsChars}
            isDisplayed={this.active}
          /> */}

          <StarWarsForm 
            characters={this.state.starwarsChars}
            isDisplayed={this.active}
          />

        </div>
      </div>
    );
  }
}

export default App;
