import React from 'react'; 
import { Link } from 'react-router-dom'; 

const EventsList = props => {
  debugger
  const eventListing = props.events 
  const eventArray = Object.keys(eventListing).map(i => eventListing[i])
  const renderEvents = eventArray.map((event, index) => 
     <li key={index}><Link to={`/events/${event.id}`}>{event.name}</Link></li>
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