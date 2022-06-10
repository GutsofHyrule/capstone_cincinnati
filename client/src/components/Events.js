import React, {Component, useRef } from "react";
import "./style.css"
import axios from 'axios'


const Event = (props) =>{
    var counter = 0
    const UPVOTE = useRef("upvote")
    const DOWNVOTE = useRef("downvote")
    var VOTES = useRef('votes')

 const upvote=() =>{
    counter++;
    
   VOTES.dangerouslySetInnerHTML = counter;
   console.log(counter)

}
 const downvote= () =>{
    counter--;
    
    VOTES.dangerouslySetInnerHTML = counter;
    console.log(counter)
 }
    return(
<div className="card center" style={{width: "18rem"}}>
  <img className="card-img-top" src={props.event.imageURL} alt="Card cap"/>
  <div className="card-body">
    <h5 className="card-title">{props.event.name}</h5>
    <p className="card-text">{props.event.description}</p>
    <p id='votes'>{counter}</p>
    <button className="votebtn" id={UPVOTE} onClick={upvote()}>Up vote</button>
    <button className="votebtn" id={DOWNVOTE} onClick={downvote()}>Down vote</button>
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

