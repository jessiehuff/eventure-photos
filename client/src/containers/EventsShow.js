import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import EventDisplay from '../components/EventDisplay';
import { deleteEvent } from '../actions';  

class EventsShow extends Component { 

  handleDelete = (event) => {
    event.preventDefault(event); 
    console.log(this)
    this.props.deleteEvent(this); 
    this.props.history.push('/events')
  }

  render() {
    return(
      <React.Fragment>
        <EventDisplay 
          name={this.props.event.name}
          description={this.props.event.description}
          cover={this.props.event.cover}
        /> 

        <button 
            onClick={this.handleDelete}>
            Delete Event
        </button> 
      </React.Fragment> 
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const event = state.events.find(event => event.id === parseInt(ownProps.match.params.eventId, 10))
  
  if (event) { 
    return { event } 
  }
  else {
    return { events: {} }
  }; 
}; 

export default connect(mapStateToProps, {deleteEvent})(EventsShow); 