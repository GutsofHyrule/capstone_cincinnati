import React, { Component } from "react";
import "./style.spence.css"
import axios from 'axios'
// import { BACKEND_URL } from "../config";
import {Card, Button} from 'react-bootstrap'



const Events = (props) =>{
    return(
    <div className="container">
        <h4 className="center">Events</h4>
        <h5>Come join the party.</h5>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.events.imageURL} />
  <Card.Body>
    <Card.Title>{props.events.name}</Card.Title>
    <Card.Text>
     {props.events.description}
     {props.events.price}
    </Card.Text>
    <Button className='center' variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
    </div>
    )
 }

export default class EventsList extends Component{
constructor(props){
    super(props)
    // this.deleteEvent = this.deleteEvent.bind(this)
   
    this.state = {
        events: []
    }
}


componentDidMount() {
    axios.get("http://localhost:5000/events/")
    .then(response => {
        this.setState({ events: response.data})
    })
    .catch((error)=>{
        console.log(error)
    })
}

// deleteEvent(id){
//     axios.delete(BACKEND_URL + 'event/' +id)
//     .then(res => console.log(res.data))

//     this.setState({
//         event: this.state.event.filter(el => el._id !== id)
//     })
// }
EventsList(){
    return this.state.events.map(currentevent => {
        return <Events event={currentevent}  key={currentevent._id}/>
    })
}

render() {
    return(
    <div className="container"> 
        <h4 className="center">Events</h4>
        <h5 className="center">Come join the party.</h5>
        {this.EventsList()}
    </div>
    )
}
}