import React from 'react'; 
import { Link } from 'react-router-dom'; 

const EventsList = props => {
  const eventListing = props.events
  const renderEvents = eventListing.map((event) => 
     <h5 key={event.id}><li><Link to={`/events/${event.id}`}>
     <img src={event.cover_url} alt="event cover" />
     <br></br>
     {event.name}</Link></li></h5>
   );
 
  return (
    <div> 
      <ul>
        {renderEvents}
      </ul>
    </div> 
  ); 
}; 

export default EventsList; 