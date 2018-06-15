import React from 'react';
import CharacterDetails from "./CharacterDetails";

const Character = (props) => {
return (
    <div className="custom-list">
        {props.characters.map(char => {
            return (
                <CharacterDetails
                    character={char}
                    key={char.created}
                />
            )
        })}
        
    </div>
);
};

export default Character