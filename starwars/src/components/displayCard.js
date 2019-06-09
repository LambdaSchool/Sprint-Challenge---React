import React from 'react';
import Char from './char.js';

const DisplayCard = props => {
    const starwarsChars = props.starwarsChars;
    return (
        <div className="centered">
        {starwarsChars.map(char => {
            return <Char char={char} />
        })}
        </div>    
        );
};

export default DisplayCard;