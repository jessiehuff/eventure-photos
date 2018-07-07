import React from 'react'; 
import { Link } from 'react-router-dom'; 

const Homepage = props => {
  return(
    <div> <br></br> 
      <h1>Welcome to Eventure Photos!</h1> 
      <br></br><br></br>
      <h3>Eventure Photos allows everyone at your event to share their photos in real time. </h3>
      <h3>
      Whether it's your wedding, your party, your meeting, or any event in between, share your memories with everyone you care about.  
      </h3> 
      <br></br><br></br>
      <h2>Enjoy every moment with Eventure</h2> 
      <br></br>
      <br></br>
      <h3>Ready to join?</h3>
      <a class="btn btn-primary" href="/signup" role="button">Sign Up</a>
      <br></br><br></br>
      <h3>Already a user?</h3>
      <a class="btn btn-primary" href="/login" role="button">Login</a> 
    </div> 
  )
}
// Need to get rid of activeclassname later

export default Homepage;