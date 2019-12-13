import React from "react";
import { Card, CardText, CardBody, CardTitle, CardImg, Col} from "reactstrap";

export default function NameList (props){
    return(
        <Col width = "50%">
            <Card className = "listname" key={props.id}>
                <CardBody>
                    <CardTitle> Name: {props.name} </CardTitle>
                    <CardText>Sex: {props.gender}</CardText>
                    <CardText>Height: {props.height}</CardText>
                    <CardText>Hair Color: {props.hair_color}</CardText>
                </CardBody>
            </Card>
        </Col>
    );
};

