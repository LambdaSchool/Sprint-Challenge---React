import React from 'react';
import './StarWars.css';


const StarWarsCard = props => {
  return (
    <div className="card">
      <h2 className="character-name">{props.char.name}</h2>
      <div className="character-info">
        <p><span>Birth-year:</span> {props.char.birth_year}</p>
        <p><span>Gender:</span> {props.char.gender}</p>
        <p><span>Height:</span> {props.char.height}</p>
        <p><span>Weight:</span> {props.char.mass}</p>
        <p><span>Hair color:</span> {props.char.hair_color}</p>
        <p><span>Eye color:</span> {props.char.eye_color}</p>
        <p><span>Skin color:</span> {props.char.skin_color}</p>
      </div>
      <div className="card-back">
        <img src={require(`./../images/${props.char.name}.jpeg`)} alt="" />
      </div>
    </div>
  )
}

export default StarWarsCard;