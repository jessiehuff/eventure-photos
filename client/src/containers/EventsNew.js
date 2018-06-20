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
    const { addEvent, history } = this.props 
    addEvent(this.state); 
    history.push('/events'); 
  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value 
    }); 
  }

  uploadHandler(files) {
    debugger
    if (files && files[0]){
      let formPayLoad = new FormData(); 
      formPayLoad.append('cover', files[0]); 
      this.sendImageToController(formPayLoad) 
    }
  } 

  sendImageToController(formPayLoad){
    debugger
    fetch(`/events/1`, {    // need to make it dynami
      credentials: 'same-origin', 
      headers: {}, 
      method: 'POST', 
      body: formPayLoad
    })
    .then(response => response.json())
    .then(imageFromController => {
      this.setState({events: this.state.events.concat(imageFromController)})
    })
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
          <br></br>
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