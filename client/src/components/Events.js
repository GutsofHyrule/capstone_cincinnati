import React, {Component} from "react";
import "./style.css"
import axios from 'axios'




const Event = (props) =>{
    return(
<div className="card center" style={{width: "18rem"}}>
  <img className="card-img-top" src={props.event.imageURL} alt="Card cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.event.name}</h5>
    <p className="card-text">{props.event.description}</p>
  </div>
</div>
    )
 }

export default class EventsList extends Component{
constructor(props){
    super(props)
   
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


EventsList(){
    return this.state.events.map(currentevent => {
        return <Event event={currentevent}  key={currentevent._id}/>
    })
}

render() {
    return(
    <div className="container"> 
        <h4 className="center">Events</h4>
        <h5 className="center">Come join the party.</h5>
        <div className="d-flex flex-wrap">
        {this.EventsList()}
        </div>
    </div>
    )
}
}