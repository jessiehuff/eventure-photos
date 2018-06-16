import React, { Component } from 'react'; 
import { Form, Button, Col } from 'react-bootstrap'; 


class Signup extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      name: '', 
      email: '', 
      password: '', 
      error: null,
    }; 
    this.handleChange = this.handleChange.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this);
  }

}