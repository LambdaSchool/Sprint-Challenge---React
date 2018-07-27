import React, { Component } from 'react';
import './App.css';
import Character from "./components/Character";


class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      starwarsPics: [
        'https://image.ibb.co/bRgCcy/Luke_Skywalker.jpg',
        'https://image.ibb.co/fWmLxy/C_3PO.jpg',
        'https://image.ibb.co/hVNFVJ/R2_D2.jpg',
        'https://image.ibb.co/hKZ7cy/Darth_Vader.jpg',
        'https://image.ibb.co/kYEUqJ/Leia_Organa.jpg',
        'https://image.ibb.co/e9zvVJ/OwenLars.jpg',
        'https://image.ibb.co/igAPPd/Beru_Whitesun_Lars.png',
        'https://image.ibb.co/grq2AJ/R5_D4.jpg',
        'https://image.ibb.co/jh3B4d/Biggs_Dark_Lighter.jpg',
        'https://image.ibb.co/bBjUqJ/Obi_Wan_Kenobi.jpg',
      ]
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
        <h1 className="Header">React Wars</h1>
      <div className = "Characters">
        {this.state.starwarsChars.map((element, i) => <Character key ={element.url} character={element} img={this.state.starwarsPics[i]}/>)}
      </div>
      </div>
    );
  }
}

export default App;
