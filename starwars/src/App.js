import React, { Component } from 'react';
import './App.css';
import StarwarsList from './components/StarwarsList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      num: 1,
      startpage: `https://swapi.co/api/people/?page=`,
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/?page=' + this.state.num);
  }

  getCharacters = URL => {
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data);
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  nextPage = () => {
    this.setState({num: this.state.num + 1 });
    fetch(`${this.state.startpage}${this.state.num}`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      console.log(data)
      console.log(data.next);
      this.getCharacters(data.next);
    })
    .catch(err => {
      throw new Error(err);
    });
  }

  prevPage = () => {
    console.log(this.state.num);
    if(this.state.num > 1){
        this.setState({num: this.state.num + -1 });
        fetch(`${this.state.startpage}${this.state.num}`)
        .then(res => {
          return res.json();
        })
        .then(data => {
          // stretch
          this.getCharacters(data.previous);
          // this.setState({ starwarsChars: data.results });
        })
        .catch(err => {
          console.error(new Error(err));
          throw new Error(err);
        });
      }
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <div className="btn-nav">
          <button onClick={this.prevPage}>Previous Page</button>
          <button onClick={this.nextPage}>Next Page</button>
        </div>
        <h4>Current Page: {this.state.num}</h4>
        <StarwarsList charactersData={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
