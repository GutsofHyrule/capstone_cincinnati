import React, {Component,  } from "react";
import "./style.css"
import {default as App}  from './Counter'
import axios from 'axios'


const Event = (props) =>{
//     var counter = 0
//     const UPVOTE = useRef("upvote")
//     const DOWNVOTE = useRef("downvote")
//     var VOTES = useRef('votes')

//  const upvote=(props) =>{
//     counter++;
    
//    VOTES.dangerouslySetInnerHTML = {counter};
//    console.log(counter)
    
// }
//  const downvote= (props) =>{
//     counter--;
    
//     VOTES.dangerouslySetInnerHTML = {counter};
//     console.log(counter)
//  }
    return(


        
<div className="eventCardWrapper col-md-6" >
    <div className="eventCard ">
  <img  src={props.event.imageURL} alt="Card cap"/>
  <div className="eventCardInfo">
    <h1 >{props.event.name}</h1>
    <p >{props.event.description}</p>

  </div>
  </div>
  <App id="voting-counter"/>   
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
    <div className="container-fluid"> 
        <h4 className="center">Events</h4>
        <h5 className="center">Come join the party.</h5>
        <div className="eventBody flex-wrap">
        {this.EventsList()}

        </div>
    </div>
    )
}
}

