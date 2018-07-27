import React from 'react';
import './StarWars.css';

const Character = props => {
  return (
    <div className = 'char'>
    <h2 className = 'name'>{props.character.name}</h2>
      <div className = 'info'>
        <ul>
          <img src = {props.img} alt = 'asdjfkl'/>
          <li>Gender: {props.character.gender}</li>
          <li>Born: {props.character.birth_year}</li>
          <li>Height: {props.character.height}</li>
          <li>Mass: {props.character.mass}</li>
          <li>Skin Color: {props.character.skin_color}</li>
          <li>Hair Color: {props.character.hair_color}</li>
          <li>Eye Color: {props.character.eye_color}</li>
        </ul>
      </div>
    </div>
  );
};


export default Character;
