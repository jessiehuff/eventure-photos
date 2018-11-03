import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'; 
import axios from 'axios'; 


class EventsList extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      events: {
        name: '', 
        description: '', 
        cover_url: '', 
        id: '', 
        likes: ''
      }
    }
  }

  componentDidMount(){
    axios.get(`http://localhost:3000/api/v1/events`)
    .then(response => {
      const allEvents = response.data 
      this.setState({
        events: allEvents 
       })
    })
    .catch(error => console.log(error))
}

  handleClick = (event) => { 
    const allEvents = this.state.events 
    const eventShow = Object.keys(allEvents).map(i => this.state.events[i])
    const thisEvent = eventShow.find(e => e.id === parseInt(event.id, 10))
    const newLikes = thisEvent.likes + 1
    
    const updatedEvent = new FormData() 
    updatedEvent.append("event[likes]", newLikes) 
    axios.put(`http://localhost:3000/api/v1/events/${event.id}`, updatedEvent)
    .then(
      this.setState({
        events: {
          likes: newLikes
        }   
      })
    )
    .then(window.location.reload())
    .catch(error => {
      console.log(error) 
    })
  }

render() { 
const eventState = this.state.events
const eventShow = Object.keys(eventState).map(i => this.state.events[i])
const eventLike = eventShow.map((event) => 
  <h5 key={event.id}>{event.likes}</h5> 
)   

  const eventListing = this.props.events
  const renderEvents = eventListing.map((event) => 
     <h5 key={event.id}><li><Link to={`/events/${event.id}`}>
     <img src={event.cover_url} alt="event cover" /> 
     <br></br>
     {event.name}
     </Link><br></br> 
     <button type="button" onClick={this.handleClick.bind(this, event)} >Like {(eventLike.find(like => parseInt(like.key) === parseInt(event.id, 10)))}</button>
     </li></h5>
   );
 
  return (
    <div> 
      <ul>
        {renderEvents}
      </ul>
    </div> 
  ); 
}; 
}

export default EventsList; 