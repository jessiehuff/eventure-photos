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
    }
  }
}