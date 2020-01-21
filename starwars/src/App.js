import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import CharacterList from './components/CharacterList';
import {Container, Col, Row} from 'reactstrap';

const App = () => {
  const [character, setCharacter] = useState([])

    useEffect (() => {
        axios.get('https://swapi.co/api/people')
        .then(response => { 
            setCharacter(response.data.results)
        })
        .catch(error => {console.log('error', error)})
    }, [])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <Container className="App">
      <h1 className="Header">React Wars</h1>
      <Row>
          
            {character.map((characteristic, id) => {
              return (
                <Col style={{ marginBottom: "20px", marginTop: "70px "}} xs="3"> <CharacterList key={id} setCharacter={characteristic} /> </Col>
              )
            })}
        </Row>
    </Container>
  );
}

export default App;