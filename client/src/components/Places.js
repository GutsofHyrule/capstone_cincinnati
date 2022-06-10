import React, { Component } from 'react'
import "./style.css"
import axios from 'axios'
import {default as App} from './Counter'
// import {Card, Button} from 'react-bootstrap'

const Places = (props) => {

    return (
            <div className="card center" style={{ width: "18rem" }}>
                <img className="card-img-top" src={props.amuse.imageURL} alt="Card cap" />
                <div className="card-body">
                    <h5 className="card-title">{props.amuse.name}</h5>
                    <p className="card-text">{props.amuse.description}</p>
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
                <h4 className="center">Places to Go</h4>
                <h5 className="center">Come join the party.</h5>
                <div className="d-flex flex-wrap">
                    {this.AmusesList()}
                </div>
            </div>
        )
    }
}
