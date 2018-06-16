import React, { Component } from 'react'; 
import { Form, Button, Col } from 'react-bootstrap'; 

class Login extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      email: '', 
      password: '', 
      error: null,
    }; 
    this.handleChange = this.handleChange.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this); 
  }

  handleChange(e){
    return this.setState({ [e.target.name]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault(); 
  }
}