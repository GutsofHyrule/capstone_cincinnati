import React, {Component,  } from "react";
import "./style.css"
import {default as App}  from './Counter'
import axios from 'axios'
import img1 from './img/events page/ev-banner-1.png'
import img2 from './img/events page/ev-banner-2.jpg'
import img3 from './img/events page/events3'
import img4 from './img/events page/events4.jpg'
import img5 from './img/events page/events5.jpg'
import img6 from './img/events page/events6.png'

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
<div className=" event-banner">
  <h1 className="event-title">Events</h1>
  <h1 className="event-title event-title-large">Events</h1>
  <div id="img-1" className="event-img-container">
    <img className="img" src={img1} />
  </div>
  <div className="event-img-container second-animation">
    <img className="img" src={img2} />
  </div>
  <div className="event-img-container third-animation">
    <img className="img" src={img3} />
  </div>
  <div id="img-4" className="event-img-container fourth-animation">
    <img className="img nba" src={img4} />
  </div>
  <div id="img-5" className="event-img-container fifth-animation">
    <img className="img" src={img5} />
  </div>
  <div id="img-6" className="event-img-container sixth-animation">
    <img className="img" src={img6} />
  </div>
  <div id="img-7" className="event-img-container seventh-animation">
    <img className="img" src={img1} />
  </div>
</div>
        <div className="eventBody flex-wrap">
        {this.EventsList()}

        </div>
    </div>
    )
}
}

