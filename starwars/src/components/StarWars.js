import React from 'react';
import './StarWars.css';
import StarWarsCharacter from './StarWarsCharacter';

const StarWars = props => {
  return (
    <div className="star-wars-container">
      {props.characters.map(character =>
        <StarWarsCharacter
          character={character}
          key={character.name} />)}
    </div>
  );
}

export default StarWars;
