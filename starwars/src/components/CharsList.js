import React from "react";
import Char from "./Char";
import "./StarWars.css";

const CharsList = props => {
  return (
    <div className="note">
      {props.chars.map(char => <Char key={char.name} swChar={char} />)}
    </div>
  );
};

export default CharsList;
