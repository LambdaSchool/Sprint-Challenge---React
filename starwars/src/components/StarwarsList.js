import React from "react";
import Character from "./Character";

function StarwarsList(props) {
  return <div className="cards">{props.starChar.filter(character => {
    return character.name.toLowerCase().indexOf(props.inputText.toLowerCase()) !== -1;
  }).map(character => 
      <Character key={character.name} character={character} />
    )}</div>
}

export default StarwarsList;