import React from 'react';
import './StarWars.css';

const CharacterDisplay = props => {
  return(
    <div className="character" onClick={()=> props.selectChar(props.id)}>
      <div className="character-name">{props.character.name}</div>
      <div className="character-birthyear">{props.character.birth_year}</div>
    </div>
  );
};

export default CharacterDisplay;
