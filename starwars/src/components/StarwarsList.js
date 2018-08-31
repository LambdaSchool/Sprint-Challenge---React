import React from "react";
import Character from "./Character";

function StarwarsList(props) {
  return <div className="cards">{props.starChar.map(character => 
      <Character key={character.name} character={character} />
    )}</div>
}

export default StarwarsList;