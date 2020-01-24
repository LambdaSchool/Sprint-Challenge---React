import React, { useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'

const StyledH1 = styled.h1`
    color: #ffffff; 
    font-family: 'Lato', sans-serif; 
    font-size: 54px; 
    font-weight: 300; 
    line-height: 58px; 
    margin: 0 0 58px;
`

const CharacterInfo = (props) => {

    const charName = props.starWarsData.map((name) => {
        return <StyledH1> {name.name} </StyledH1>
    
    })

    const randomChar = charName[Math.floor(Math.random()*charName.length)]

    return (
        <div>
            {randomChar}
        </div>
    )
}

export default CharacterInfo