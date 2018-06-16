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

  render(){
    return(
      <div> 
        <Col md={4}></Col> 
        <Col md={4}> 
          <div className="loginForm"> 
            <h1>Log In</h1> 
            <Form onSubmit={this.handleSubmit}> 
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
                <Button type="submit" value="Sign Up">Sign Up</Button> 
                <Button type="link">Forgot Password?</Button> 
              </div> 
              <div className="newAccount"> 
                <hr></hr> 
                <p>New to Eventure Photos?</p> 
                <Button href="/signup" bsStyle="primary" bsSize="large" block>Sign Up</Button> 
              </div> 
            </Form> 
          </div> 
        </Col> 
        <Col md={4}></Col> 
      </div> 
    )
  }
}

export default Login; 