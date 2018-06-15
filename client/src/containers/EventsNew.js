import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { addEvent } from '../actions'; 

class EventsNew extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      name: '', 
      description: '', 
      cover: {selectedFile: null}
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

  fileChangedHandler = (event) => {
    this.setState({selectedFile: event.target.files[0]}) 
  }

  uploadHandler = () => { 
    const formData = new FormData() 
    formData.append('myFile', this.state.selectedFile, this.state.selectedFile.name)
   //axios post? 
    console.log(this.state.selectedFile)
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
            onChange={this.fileChangedHandler} />
            <button onClick={this.uploadHandler}>Upload!</button>  
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