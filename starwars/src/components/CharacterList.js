import React, { useEffect, useState } from 'react';
import CharacterCard from './CharacterCard.js'
import axios from 'axios';

const CharacterList = () => {

  const [chars, setChars] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.co/api/people/")
      .then((response) => {
        const chars = response.data.results;
        setChars(chars);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      {chars.map(char => {
        console.log(char)
        return (
          <CharacterCard
            key={char.id}
            name={char.name} />
        )
      })}
    </div>
  );

}

export default CharacterList;
