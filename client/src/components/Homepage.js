import React from 'react'; 

const Homepage = props => {
  return(
    <div className="homepage"> <br></br><br></br><br></br><br></br>
      <div className="landing-option">
        <br></br><br></br>
        <br></br><br></br>
        <h2>Have a New Event?</h2>
        <a className="btn btn-primary" href="/events/new" role="button">New Event</a>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <br></br><br></br>
        <h2>See Existing Events</h2>
        <a className="btn btn-primary" href="/events" role="button">Current Events</a> 
      </div> 
      <br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br>
      <br></br><br></br><br></br><br></br><br></br>
    
    </div> 
  )
}

export default Homepage;