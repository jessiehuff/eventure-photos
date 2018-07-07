import React from 'react'; 
import { Link } from 'react-router-dom'; 

const Homepage = props => {
  return(
    <div className="homepage"> <br></br><br></br><br></br><br></br>
      <div className="landing-option">
        <h2>Ready to join?</h2>
        <a class="btn btn-primary" href="/signup" role="button">Sign Up</a>
        <br></br><br></br>
        <h2>Already a user?</h2>
        <a class="btn btn-primary" href="/login" role="button">Login</a> 
      </div> 
      <br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br>
    
    </div> 
  )
}

export default Homepage;