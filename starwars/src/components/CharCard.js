import React from 'react';

const CharCard = props => {
    return (
        <div className="card char-card">
            <h3>Name: {props.name}</h3>
            <h5>Height: {props.height}</h5>
            <h5>Mass: {props.mass}</h5>
            <h5>Hair Color: {props.hairColor}</h5>
            <h5>Skin Color: {props.skinColor}</h5>
            <h5>Eye Color: {props.eyeColor}</h5>
            <h5>Birth Year: {props.birthYear}</h5>
            <h5>Gender: {props.gender}</h5>
        </div>
    );
};

export default CharCard;