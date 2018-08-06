import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import EventDisplay from '../components/EventDisplay'; 

class EventsShow extends Component { 
  render() {
    return(
      <React.Fragment>
        <EventDisplay 
          name={}
          description={}
        /> 
      </React.Fragment> 
    )
  }
}

console.log(this)

const mapStateToProps = (state, ownProps) => {
  const event = state.events.find(event => event.id === parseInt(ownProps.match.params.eventId, 10))
  
  if (event) { 
    return { event } 
  }
  else {
    return { events: {} }
  }; 
}; 

export default connect(mapStateToProps)(EventsShow); 