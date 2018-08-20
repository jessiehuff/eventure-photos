import React from 'react'; 
import { Link } from 'react-router-dom'; 

const EventsList = props => {
  //const eventListing = props.events 
  //const eventArray = Object.keys(eventListing).map(i => eventListing[i])
  const renderEvents = props.events.map((event) => 
     <li key={event.id}><Link to={`/events/${event.id}`}>{event.name}</Link></li>
   ); 
   debugger
 
  return (
    <div> 
      <ul>
        {renderEvents}
      </ul>
    </div> 
  ); 
}; 

export default EventsList; 