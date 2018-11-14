import React, { Component } from 'react'; 
import EventsList from '../containers/EventsList'; 
import {connect} from 'react-redux'; 

class EventsPage extends Component { 

  render() {
    return(
      <React.Fragment> 
      <div> 
        <br></br>
        <h1>Events:</h1><br></br> 
        <EventsList events={this.props.events} /> 
      </div> 
      </React.Fragment> 
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