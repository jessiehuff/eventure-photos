import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { addPhoto } from '../actions'; 

class PhotosNew extends Component { 
  constructor(props) {
    super(props); 
    this.state = {
      filename: '', 
      content_type: '', 
      file_size: '', 
      created_at: '' //user_id?
    };
  }

  // handleOnSubmit = event => { 
  //   event.preventDefault(); 
  //   if (this.state.id === "") {
  //     this.props.addPhoto(this.state) 
  //   }
  // }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value 
    }); 
  }

  render() {
    return (
      <div> 
        <h4>Add a New Photo</h4> 
        <form onSubmit={this.handleOnSubmit} > 
          <input
            type="file"
            placeholder="New Photo"
            name="photo"
            onChange={this.handleOnChange} /> 
            <br></br><br></br> 
          <input 
            type="submit"
            value="Add Photo" /> 
        </form> 
      </div> 
    );
  }
}; 

export default connect(null)(PhotosNew); 