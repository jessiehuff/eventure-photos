import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import {updateEvent} from '../actions'; 

class EventEdit extends Component{
    constructor(props) {
        super(props); 
        this.state = {
            name: this.props.event.name, 
            description: this.props.event.description, 
            cover: this.props.event.cover_url, 
            id: this.props.event.id 
        }
    }
 
  handleEdit = event => {
    event.preventDefault(); 
    this.props.updateEvent(this.state)
    this.props.history.push(`/events/${this.props.event.id}`)
  }

  handleOnChange = event => {
      this.setState({
        [event.target.name]: event.target.value
    }); 
  }

  handleFile = event => {
    this.setState({
      cover: event.target.files[0]
    })
  }

  render() {
    return (
      <div> 
        <br></br>
        <h1>Update Event</h1> <br></br>
        <form className="eventForm" onSubmit={this.handleEdit} > 
          <input 
            type="text"
            defaultValue={this.props.event.name}
            placeholder="Name" 
            name="name" 
            onChange={this.handleOnChange} /> 
          <br></br><br></br>
          <input 
            type="text"
            defaultValue={this.props.event.description}
            placeholder="Description"
            name="description" 
            onChange={this.handleOnChange} /> 
          <br></br> <br></br> 
          <input
            type="file" 
            id="file"
            defaultValue={this.props.event.cover}
            placeholder="Cover Image"
            name="cover"
            onChange={this.handleFile} />
            <br></br><br></br>             
          <input 
            type="submit"
            value="Update Event" /> 
        </form> 
      </div> 
    );
  }
}; 

const mapStateToProps = (state, ownProps) => {
    const allEvents = state.events.events
  
    const eventShow = Object.keys(allEvents).map(i => state.events.events[i])
    const event = eventShow.find(event => event.id === parseInt(ownProps.match.params.eventId, 10))
    
    if (event) {
        return { event }
      }
    else {
      return { events: [] }
    }; 
  }; 

export default connect(mapStateToProps, { updateEvent })(EventEdit); 