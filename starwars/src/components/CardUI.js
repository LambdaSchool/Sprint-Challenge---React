import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

//components
import CharacterImage from './CharacterImage'
import CharacterInfo from "./CharacterInfo";
import Button from './Button'

const StyledCard = styled.div`
  
  display: flex;
  flex-direction: column;
  justify-items: center;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.3);
  width: 800px;
  background: #1C2329;
  padding: 5px;
  margin: 20px;
`;


const CardUi = () => {
  const [starWarsData, setStarWarsData] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people")
      .then(response => {
        console.log(response.data.results);
        setStarWarsData(response.data.results);
      })
      .catch(error => console.log(`We have an error ${error}`));
  }, []);

  

  return (
    <StyledCard>
      <CharacterImage />
      <CharacterInfo starWarsData={starWarsData}/>
      <Button guessAgain={'Guess Again'}/>
    </StyledCard>
  );
};

export default CardUi;
