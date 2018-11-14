import React, {Component} from 'react';
import { Link } from 'react-router-dom'
import axios from 'axios'; 

class Event extends Component {
    constructor(props) {
        super(props); 
        this.state = {
            likes: null
        }
    }

    componentDidMount(){
        axios.get(`http://localhost:3000/api/v1/events/${this.props.event.id}`)
            .then(response => {
              const event = response.data 
              this.setState({
                likes: event.likes
               })
            })
            .catch(error => console.log(error))

        }

    handleClick = () => {
        const newLikes = this.state.likes + 1 
        const updatedEvent = new FormData() 
        updatedEvent.append("event[likes]", newLikes) 
        axios.put(`http://localhost:3000/api/v1/events/${this.props.event.id}`, updatedEvent)
        .then(response => { 
            this.setState({
                likes: response.data.likes
            })
        })
        .catch(error => console.log(error))
    }
    
    render() {
        return(
        <h5 key={this.props.event.id}><li><Link to={`/events/${this.props.event.id}`}>
        <img src={this.props.event.cover_url} alt="event cover" /> 
        <br></br>
        {this.props.event.name}
        </Link><br></br> 
        <button type="button" onClick={this.handleClick.bind(this)} >Like {this.state.likes}</button>
        </li></h5>
        )}
   
}

export default Event 