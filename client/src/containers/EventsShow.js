import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import EventDisplay from '../components/EventDisplay';
import { deleteEvent } from '../actions';  
import PhotosNew from '../containers/PhotosNew';

class EventsShow extends Component { 

  handleDelete = (event) => {
    event.preventDefault(event); 
    this.props.deleteEvent(this.props.event); 
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

      <PhotosNew event={this.props.event} />


        <br></br><br></br>
        <br></br><br></br>

        <button 
            onClick={this.handleDelete}>
            Delete Event
        </button> 
      </React.Fragment> 
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const eventShow = Object.keys(state.events).map(i => state.events[i])
  const event = eventShow.find(event => event.id === parseInt(ownProps.match.params.eventId, 10))
  
  if (event) { 
    return { event } 
  }
  else {
    return { events: {} }
  }; 
}; 

export default connect(mapStateToProps, {deleteEvent})(EventsShow); 