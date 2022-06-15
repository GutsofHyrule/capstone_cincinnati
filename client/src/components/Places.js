import React, { Component } from 'react'
import "./style.css"
import axios from 'axios'
import {default as App} from './Counter'
import banner from "./img/placesBanner.jpeg"

// import {Card, Button} from 'react-bootstrap'

const Places = (props) => {


    return (

        <div className='blog-post__container '>

            <div className="blog-post filterDiv" >
                <div className="blog-post__img">
                <img  src={props.amuse.imageURL} alt="Card cap" />
                </div>
                <div className="blog-post__info">
                    <h5 className="blog-post__title">{props.amuse.name}</h5>
                    <p className="blog-post__text">{props.amuse.description}</p>
                    
                </div>
                <App />
            </div>
        </div>

    )
}
export default class AmusesList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            amuses: []
        }
    }


    componentDidMount() {
        axios.get("http://localhost:5000/amusements/")
            .then(response => {
                this.setState({ amuses: response.data })
            })
            .catch((error) => {
                console.log(error)
            })
    }


    AmusesList() {
        return this.state.amuses.map(currentamuse => {
            return <Places amuse={currentamuse} key={currentamuse._id} />
        })
    }

    render() {
        return (
            <div className="container">
                <style>

                </style>
                    <img className='places-banner' src={banner}></img>

                <div className="d-flex flex-wrap">
                    {this.AmusesList()}
                </div>
            </div>
        )
    }
}
