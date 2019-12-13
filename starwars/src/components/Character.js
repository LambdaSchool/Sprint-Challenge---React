import React from 'react';
import styled from 'styled-components';

const CardDiv = styled.div`
    border-radius: 6px;
    background: gray;
    border: 5px solid black;
    width: 25%;
`;

const CharacterCard = (props) => {
    //console.log(props);

    return (
        <CardDiv>
            <h2>{props.name}</h2>
            <h2>Born: {props.birthyear}</h2>
        </CardDiv>
    )
}

export default CharacterCard;