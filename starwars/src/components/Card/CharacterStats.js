import React from "react";
import "../StarWars.css";

const CharacterStats = props => {
  return (
    <div className="character-stats">
      <span>Gender: {props.info.gender}</span>
      <span>Birth Year: {props.info.birth_year}</span>
      <span>Height: {props.info.height}</span>
      <span>Mass: {props.info.mass}</span>
    </div>
  );
};

export default CharacterStats;
