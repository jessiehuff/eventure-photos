import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { addEvent } from '../actions'; 
import {updateEvent} from '../actions'; 

class EventForm extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      name: '', 
      description: '', 
      cover: null, 
      id: ''
    };
    this.handleOnChange = this.handleOnChange.bind(this); 
    this.handleOnSubmit = this.handleOnSubmit.bind(this); 
  } 

  handleOnSubmit = event => {
    event.preventDefault();  
    if (this.props.match.params.eventId === undefined) {
      this.props.addEvent(this.state);
      this.props.history.push('/events')
    } 
    else {
      this.props.updateEvent(this.state)
      this.props.history.push(`/events/${this.state.id}`)
    }
  }

  handleOnChange = (event) => {
    if (this.props.location.pathname === "/events/new"){
      this.setState({
        [event.target.name]: event.target.value  
      })
    }
    else {
      this.setState({
        name: this.props.event.name, 
        description: this.props.event.description, 
        id: this.props.event.id, 
        [event.target.name]: event.target.value  
      }); 
    }
  }

  handleFile = event => {
    this.setState({
      cover: event.target.files[0]
    })
  }

  render() { 
    return (
      <div className="newEvent"> 
        <br></br><br></br> 
        <h1>Add or Update Event</h1> <br></br>
        <form className="eventForm" onSubmit={this.handleOnSubmit} > 
          <input 
            type="text"
            placeholder = {this.props.location.pathname === "/events/new" ? "Name" : this.props.event.name}  
            defaultValue = {this.props.location.pathname === "/events/new" ? "" : this.props.event.name} 
            name="name" 
            onChange={this.handleOnChange } /> 
          <br></br><br></br>
          <input 
            type="text"
            placeholder = {this.props.location.pathname === "/events/new" ? "Description" : this.props.event.description}
            defaultValue = {this.props.location.pathname === "/events/new" ? "" : this.props.event.description} 
            name="description" 
            onChange={this.handleOnChange} /> 
          <br></br> <br></br> 
          <input
            type="file" 
            id="file"
            placeholder="Cover Image"
            disabled={this.props.match.params.eventId === undefined ? false : true}
            name="cover"
            onChange={this.handleFile} />
            <br></br><br></br>             
          <input 
            type="submit"
            value="Submit" /> 
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

export default connect(mapStateToProps, { addEvent, updateEvent })(EventForm); 