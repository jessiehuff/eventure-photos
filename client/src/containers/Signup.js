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

  handleChange(e) {
    return this.setState({[e.target.name]: e.target.value})
  }

  handleSubmit(e){
    e.preventDefault(); 
  }

  render() {
    return (
      <div> 
        <Col md={4}></Col> 
        <Col md={4}> 
          <div className="signupForm"> <br></br>
            <h1>Sign Up</h1> 
            <Form onSubmit={this.handleSubmit}> 
              <input 
                label="Name"
                type="text"
                name="name" 
                placeholder="Name"
                value={this.state.name}
                onChange={this.handleChange} 
              /> 
              <br></br><br></br>
              <input 
                label="Email"
                type="text" 
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.handleChange}
              /> 
              <br></br><br></br>
              <input
                label="Password"
                type="password"
                name="password"
                placeholder="Password" 
                value={this.state.password}
                onChange={this.handleChange}
              /> 
              <br></br><br></br>
              <div className="submission"> 
                <Button type="submit" value="Sign Up">Sign Up</Button> <br></br><br></br> 
                <Button type="link">Forgot Password?</Button> 
              </div> 
              <br></br><br></br>
              <div className="existingAccount"> 
                <hr></hr> 
                <p>Already have an account?</p> 
                <Button href="/login" bsStyle="primary" bsSize="large" block>Log In</Button> 
              </div> 
            </Form> 
          </div> 
        </Col> 
        <Col md={4}></Col> 
      </div> 
    )
  }
}

export default Signup; 