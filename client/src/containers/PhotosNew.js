import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { addPhoto } from '../actions'; 

class PhotosNew extends Component { 
  constructor(props) {
    super(props); 
    this.state = {
      filename: null, 
      id: '',
      event: this.props.event
    };
  }

  handleOnSubmit = event => { 
    event.preventDefault(); 
    this.props.addPhoto(this.state);
    //this.props.history.push(`/events/{this.props.event.id}`);
  }

  handleFile = event => {
    this.setState({
      filename: event.target.files[0]
    });
  }


  render() {
    return (
      <div> 
        <h4>Add a New Photo</h4> 
        <form className="photoForm" onSubmit={this.handleOnSubmit} > 
          <input
            type="file"
            id="file"
            placeholder="New Photo"
            name="filename"
            onChange={this.handleFile} /> 
            <br></br><br></br> 
          <input 
            type="submit"
            value="Add Photo" /> 
        </form> 
      </div> 
    );
  }
}; 

export default connect(null, {addPhoto})(PhotosNew); 