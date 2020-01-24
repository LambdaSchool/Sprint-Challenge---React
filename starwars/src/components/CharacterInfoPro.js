import React, { useState, useEffect } from "react";
import { Container, Card, Image, Button } from "semantic-ui-react";
import axios from "axios";

const CharacterInfoPro = props => {
  const [starWarsData, setStarWarsData] = useState([]);
  const [refreshCard, setRefreshCard] = useState([]);
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(true)

    axios
      .get("https://swapi.co/api/people")
      .then(response => {
        console.log(response.data.results);
        setStarWarsData(response.data.results);
        setIsLoading(false)
      })
      .catch(error => console.log(`We have an error ${error}`));
  }, [refreshCard]);
  
const randomCharList = starWarsData[Math.floor(Math.random() * starWarsData.length)] || {}

  return (
    <Container style={{ margin: 20 }}>
      <Card>
        <Image src="https://www.fillmurray.com/400/600" wrapped ui={false} />
        <Card.Content>
          <Card.Header>
            {isLoading && <h3>Loading</h3>}
            {randomCharList.name}
          </Card.Header>
          <Card.Meta>
            <span className="date">{randomCharList.birth_year}</span>
          </Card.Meta>
          <Card.Description>
            Star Wars is an American epic space-opera media franchise created by
            George Lucas.
          </Card.Description>
        </Card.Content>
        <Card.Content extra>
          <Button
            onClick={() => {
              setRefreshCard(refreshCard + 1);
            }}
          >
            Click Here
          </Button>
        </Card.Content>
      </Card>
    </Container>
  );
};

export default CharacterInfoPro;
