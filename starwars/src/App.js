import React, { useState, useEffect } from 'react';
import './App.css';
import styled from 'styled-components';
import Axios from 'axios';

import CharacterCard from './components/Character';

const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    Axios.get('https://swapi.co/api/people/')
      .then(response => {
        //console.log(response);
        setCharacters(response.data.results);
      })
      .catch(error => console.log(error))
  }, [])

  //console.log(characters);

  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <FlexDiv>
        {characters.map(character => <CharacterCard name = {character.name} birthyear = {character['birth_year']} />)}
      </FlexDiv>
    </div>
  );
}

export default App;
