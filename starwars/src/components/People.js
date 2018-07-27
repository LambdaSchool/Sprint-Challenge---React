import React from 'react';
import './StarWars.css';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const People = props => {
        return (
        <div className="cardWrapper">
            <Card>
                <CardImg top width="318" height="180" src={`img/${props.name}.png`} alt="Placeholder"></CardImg>
                    <CardBody>
                        <CardTitle>{props.name}</CardTitle>
                        <CardSubtitle>{props.descriptions[props.index]}</CardSubtitle>
                        <CardText>
                            <div>Birth Year: {props.birthYear}</div>
                            {/* <p>Films: {props.films}</p> */}
                            <div>Gender: {props.gender}</div>
                            <div>Eye Color: {props.eyeColor}</div>
                            <div>Height: {props.height} cm</div>
                            <div>Mass: {props.mass} kg</div>
                            <div><a href={props.homeworld}>Homeworld</a></div>
                        
                        </CardText>
                        <Button href={props.url}>Learn More</Button>
                    </CardBody>
            </Card>
        </div>
    )
}

export default People;
