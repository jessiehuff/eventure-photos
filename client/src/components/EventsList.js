import React from 'react'; 
import { Link } from 'react-router-dom'; 

const EventsList = props => {
  const eventListing = props.events
  const renderEvents = eventListing.map((event, index) => 
     <h5><li key={index}><Link to={`/events/${event.id}`}>{event.name}</Link></li></h5> 
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