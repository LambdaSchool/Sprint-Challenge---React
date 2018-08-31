import React from 'react';
import Character from './Character.js'
import './StarWars.css';


const CharacterList = (props) => {
  return (
    <ul className='character-list'>
      {props.starwarsChars.map(character =>
        <Character  key={character.created}
                    character={character}/>
      )}
    </ul>
  );
}

export default CharacterList;