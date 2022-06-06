import React from "react";
import "./style.spence.css"
import {Card, Button} from 'react-bootstrap'

const Events = (props) => {
    return(
    <div className="container">
        <h4 className="center">Events</h4>
        <h5>Come join the party.</h5>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src='' />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button className='center' variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
    )
}

export default Events