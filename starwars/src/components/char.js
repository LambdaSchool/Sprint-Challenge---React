import React from 'react';

const Char = function char(props) {
    console.log("char PROPS:", props);
    const character = props.char;
    return (
      <div className="maindiv">
        <h2>{character.name}</h2>
        <ul>
            <li>Height: {character.height}</li>
            <li>Birth year: {character.birth_year}</li>
            <li>Eye color: {character.eye_color}</li>
        </ul>
      </div>
    );
  }

  export default Char;