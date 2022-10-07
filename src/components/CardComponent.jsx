import React from "react";
import Card from "react-bootstrap/Card";

const CardComponent = (props) => {
  return (
    <Card className="col-3 m3 pt-2" style={{ width: "18rem", margin: "10px 20px" }}>
      <Card.Img variant="top" src={ props.img } />
      <Card.Body>
        <Card.Title> { props.title } </Card.Title>
        <Card.Text>
          {props.description}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default CardComponent;
