import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { addEvent } from '../actions'; 

class EventsNew extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      name: '', 
      description: '', 
    }; 
  }

  handleOnSubmit = event => {
    event.preventDefault(); 
    const { addEvent, history } = this.props 
    addEvent(this.state); 
    history.push('/events'); 
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value 
    }); 
  }

  render() {
    return (
      <div> 
        <h1>Add an Event</h1> 
        <form onSubmit={this.handleOnSubmit} > 
          <input 
            type="text"
            placeholder="Name" 
            name="name" 
            onChange={this.handleOnChange} /> 
          <input 
            type="text"
            placeholder="Description"
            name="description" 
            onChange={this.handleOnChange} /> 
          <input 
            type="file"
            placeholder="Cover Image"
            name="cover"
            onChange={this.handleOnChange} /> 
          <input 
            type="submit"
            value="Add Event" /> 
        </form> 
      </div> 
    );
  }
}; 

export default connect(null, { addEvent })(EventsNew); 