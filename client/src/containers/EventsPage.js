import React, { Component } from 'react'; 
import EventsList from '../components/EventsList'; 
import {connect} from 'react-redux'; 

class EventsPage extends Component {
  
  render() {
    return(
      <div> 
        <br></br>
        <h1>Events:</h1> 
        <EventsList events={this.props.events} /> 
        
      </div> 
    )
  }
}; 

const mapStateToProps = state => {
  return {
   events: state.events.events
  }
}

export default connect(mapStateToProps)(EventsPage); 