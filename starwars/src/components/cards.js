import React from 'react';

import Card from './card';
import './StarWars.css';

const Cards = ({ starwars }) => (
  <div className="cards">
    {starwars.map((char, index) => (
      <Card key={index} data={char} />
    ))}
  </div>
);

export default Cards;
