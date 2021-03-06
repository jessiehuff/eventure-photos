import React, { Component } from 'react'; 
import EventsList from '../components/EventsList'; 
import {connect} from 'react-redux'; 

class EventsPage extends Component { 
  
  render() {
    return(
      <div> 
        <br></br>
        <h1>Events:</h1><br></br> 
        <EventsList events={this.props.events} /> 
        
      </div> 
    )
  }
}; 

const mapStateToProps = state => {
  return {
   events: state.events.events, 
   photos: state.events.photos
  }
}

export default connect(mapStateToProps)(EventsPage); 