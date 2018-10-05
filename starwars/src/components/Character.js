import React from "react";

function Character(props) {
  return(
    <div className="card">
      <h1>{props.character.name}</h1>
      <p>Born: {props.character.birth_year}</p>
      <div className="describe">
        <h2>Description:</h2>
        <ul>
          <li>Gender: {props.character.gender}</li>
          <li>Skin color: {props.character.skin_color}</li>
          <li>Height: {props.character.height}cm</li>
          <li>Hair color: {props.character.hair_color}</li>
          <li>Mass: {props.character.mass}kg</li>
        </ul>
        
      </div>

    </div>
  )
}

export default Character;