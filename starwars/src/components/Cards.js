import React from 'react'
import Card from './Card'
import './Cards.css'

const Cards = (props) => {
  return (
    <div className="Cards">
      {props.swChars.map(char => {
        return <Card key={char.created} char={char} >{char.name}</Card>
      })}
    </div>
  )
}

export default Cards