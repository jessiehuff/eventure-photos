import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import {Route, Switch} from 'react-router-dom'; 
import {fetchEvents} from '../actions'; 
import EventsNew from './EventsNew'; 
import EventsShow from './EventsShow'; 
import EventsList from '../components/EventsList'; 

class EventsPage extends Component {

  componentDidMount() {
    if (this.props.events.length == 0) { 
      this.props.fetchEvents(); 
    }
  }

  render() {
    return(
      <div> 
        <EventsList events={this.props.events} /> 
        <Switch> 
          <Route path={`${this.props.match.url}/new`} component={EventsNew} /> 
          <Route path={`${this.props.match.url}/:eventId`} component={EventsShow} /> 
        </Switch> 
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