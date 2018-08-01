import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import ImageDisplay from '../components/ImageDisplay'; 

class EventsShow extends Component { 
  render() {
    return(
      <ImageDisplay event={this.props.event} /> 
    )
  }
}



const mapStateToProps = (state, ownProps) => {
  const event = state.events.find(event => event.id === ownProps.match.params.eventId)

  if (event) { 
    return { event } 
  }
  else {
    return { events: {} }
  }; 
}; 

export default connect(mapStateToProps)(EventsShow); 