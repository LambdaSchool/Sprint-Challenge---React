import React from 'react';

const Card = props => {
    return (
        <div className='cardContainer'>
        {props.data.map(character => {
            return (
             <div className='card'> 
             <h1>{character.name}</h1>
             <p>Gender: {character.gender}</p>
             <p>Height: {character.height}</p>
             <p>Mass: {character.mass}</p>
             <p>Skin Color: {character.skin_color}</p>
             <p>Eye Color: {character.eye_color}</p>
             <p>Birth Year: {character.birth_year}</p>
             
             
             
             
             </div>
            )
        })}
        
        
        </div>
    )
}
















export default Card;