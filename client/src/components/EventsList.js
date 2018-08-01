import React from 'react'; 
import { Link } from 'react-router-dom'; 

const EventsList = props => {
  const renderEvents = props.events.map((event) => 
    <li key={event.id}><Link to={`/events/${event.id}`}>{event.name}</Link></li>
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