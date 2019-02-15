import React from 'react'
import './Card.css'

const Card = (props) => {
  return (
    <div className="Card">
      <h2 className="charName">{props.char.name}</h2>
      <p><span className="charProperty">Born:</span> {props.char.birth_year}</p>
      <p><span className="charProperty">Gender:</span> {props.char.gender}</p>
      <p><span className="charProperty">Mass:</span> {props.char.mass}kg</p>
      <p><span className="charProperty">Height:</span> {props.char.height}m</p>
      <p><span className="charProperty">Eye Color:</span> {props.char.eye_color}</p>
      <p><span className="charProperty">Hair Color:</span> {props.char.hair_color}</p>
      <p><span className="charProperty">Skin Color:</span> {props.char.skin_color}</p>
    </div>
  )
}

export default Card