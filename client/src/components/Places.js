import React from 'react'
import "./style.css"
import {Card, Button} from 'react-bootstrap'

const Places= (props) => {
    
        return(
            <div className="container">
                <h4 className = "center">Places</h4>
                <h5 className="center">Explore the west.</h5>
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
    export default(Places)