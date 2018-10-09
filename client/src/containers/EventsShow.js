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
    debugger
    return(
      <React.Fragment>
        <EventDisplay 
          name={this.props.event.name}
          description={this.props.event.description}
          cover_url={this.props.event.cover_url}
          //photo_url={this.props.event.photos.photo_url}
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
  const allEvents = state.events.events
  const allPhotos = state.events.photos

  const eventShow = Object.keys(allEvents).map(i => state.events.events[i])
  const event = eventShow.find(event => event.id === parseInt(ownProps.match.params.eventId, 10))

  const photoShow = Object.keys(allPhotos).map(i => state.events.photos[i])

  if (event) { 
    return { event }
  }
    if (photoShow) {
      return { photoShow }
    }
  else {
    return { events: [] }
  }; 
}; 

export default connect(mapStateToProps, {deleteEvent})(EventsShow); 