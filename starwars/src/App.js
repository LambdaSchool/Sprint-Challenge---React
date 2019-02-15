import React from 'react'
import Cards from './components/Cards'
import Pagination from './components/Pagination'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      swChars: [],
      maxPage: "",
      previousPage: "",
      nextPage: "",
    }
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people')
  }

  getCharacters = (URL) => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.

    fetch(URL)
      .then(res => {
        return res.json()
      })
      .then(data => {
        let count = Math.floor(data.count / 9)

        this.setState({ 
          swChars: data.results,
          maxPage: count,
          previousPage: data.previous,
          nextPage: data.next
         })
      })
      .catch(err => {
        throw new Error(err)
      })
  }

  render() {
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <Pagination
          state={this.state}
          getCharacters={this.getCharacters}
        />
        <Cards swChars={this.state.swChars} />
      </div>
    )
  }
}

export default App
