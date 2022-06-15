import React, {Component,  } from "react";
import "./style.css"
import {default as App}  from './Counter'
import axios from 'axios'
import { BACKEND_URL } from '../config'


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


        
<div className="blog-post__container" >
<div className="blog-post filterDiv" >
    <div className="blog-post__img ">
  <img  src={props.event.imageURL} alt="Card cap"/>
  </div>
  <div className="blog-post__info">
    <h5 className="blog-post__title">{props.event.name}</h5>
    <p className="blog-post__text">{props.event.description}</p>

  </div>
  <App /> 
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
    axios.get( BACKEND_URL + "events/")
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

