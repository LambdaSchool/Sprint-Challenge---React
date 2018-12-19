import React from "react";
import "../StarWars.css";
import CharacterStats from "./CharacterStats";

const CardContainer = props => {
  // console.log(props.character);
  return props.character.map(item => {
    return (
      <div key={item.url} className="character-card">
        <h2>{item.name}</h2>
        <CharacterStats info={item} />
      </div>
    );
  });
};

export default CardContainer;
