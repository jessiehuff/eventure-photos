import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { addEvent } from '../actions'; 

class EventsNew extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      name: '', 
      description: '', 
      cover: null
    };
  }

  handleOnSubmit = event => {
    event.preventDefault(); 
    this.props.addEvent(this.state);
    this.props.history.push('/events')
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value 
    }); 
  }

  render() {
    return (
      <div> 
        <br></br>
        <h1>Add an Event</h1> <br></br>
        <form className="eventForm" onSubmit={this.handleOnSubmit} > 
          <input 
            type="text"
            placeholder="Name" 
            name="name" 
            onChange={this.handleOnChange} /> 
          <br></br><br></br>
          <input 
            type="text"
            placeholder="Description"
            name="description" 
            onChange={this.handleOnChange} /> 
          <br></br> <br></br> 
          <input 
            type="file"
            placeholder="Cover Image"
            name="cover"
            onChange={this.handleOnChange} />
            <br></br><br></br>             
          <input 
            type="submit"
            value="Add Event" /> 
        </form> 
      </div> 
    );
  }
}; 

export default connect(null, { addEvent })(EventsNew); 