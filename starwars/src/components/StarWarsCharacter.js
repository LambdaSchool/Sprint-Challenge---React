import React from 'react';
import './StarWars.css';

const StarWarsCharacter = props => {
  return (
    <div className="star-wars-character">
      <h1>{props.character.name}</h1>
      <p>Birth Year: {props.character.birth_year}</p>
      <p>Gender: {props.character.gender}</p>
      <p>Height: {props.character.height}cm</p>
      <p>Mass: {props.character.mass}kg</p>
    </div>
  );
}

export default StarWarsCharacter;
