import React, { useState, useEffect} from "react";
import axios from "axios";
import Namelist from "./NameList";


function StarWarsNames(){
const [charName, setCharName] = useState([]);

    useEffect(() =>{
        axios
        .get("https://swapi.co/api/people/")
        .then(response =>{
            setCharName(response.data.results);
        })
        .catch(err =>{
            console.log(err);
        })
    },[])
    
    return(
        <div className = "names">
            {charName.map((character)=>{
                return(
                    <Namelist
                        charName = {character.name}
                        gender= {character.gender}
                        height = {character.height}
                        key = {character.id}
                        hair_color = {character.hair_color}
                    />
                )}
            )}
        </div>
    );
};
export default StarWarsNames;