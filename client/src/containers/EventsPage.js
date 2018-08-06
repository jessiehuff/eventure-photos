import React, { Component } from 'react'; 
import { bindActionCreators } from 'redux'; 
import { connect } from 'react-redux'; 
import {Route, Switch} from 'react-router-dom'; 
import {fetchEvents} from '../actions/index'; 
import EventsNew from './EventsNew'; 
import EventsShow from './EventsShow'; 
import EventsList from '../components/EventsList'; 

class EventsPage extends Component {

  componentDidMount() {
    if (this.props.events.length === 0) { 
      this.props.fetchEvents(); 
    }
  }

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
    events: state.events 
  }
}

export default connect(mapStateToProps, {fetchEvents})(EventsPage); 