import React from 'react';
import CharCard from './CharCard';

const CharList = props => {
    return (
        <div className="row d-flex justify-content-center">
            {props.charAttrib.map((char, i) => <CharCard name={char.name} height={char.height} mass={char.mass} hairColor={char.hair_color} skinColor={char.skin_color} eyeColor={char.eye_color} birthYear={char.birth_year} gender={char.gender} key={i}/>)}            
        </div>
        );
};

export default CharList;