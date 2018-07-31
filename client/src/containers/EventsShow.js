import React from 'react'; 
import { connect } from 'react-redux'; 
import { fetchEvents } from '../actions'; 

const EventsShow = ({ event }) => 
  <div className="col-md-8"> 
    <h2>{event.name}</h2> 
    <p>{event.description}</p> 
  </div>; 


const mapStateToProps = (state, ownProps) => {
  const event = state.events.find(event => event.id === ownProps.match.params.eventId)

  if (event) { 
    console.log(event)
    return { event } 
  }
  else {
    return { events: {} }
  }; 
}; 

export default connect(mapStateToProps, { fetchEvents })(EventsShow); 