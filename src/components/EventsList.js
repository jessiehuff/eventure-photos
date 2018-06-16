import React from 'react'; 
import { Link } from 'react-router-dom'; 

const EventsList = ({ events }) => {
  const renderEvents = events.map(event => 
    <Link style={{ marginRight: '12px' }} key={event.id} to={`/events/${event.id}`}>{event.name}</Link> 
  ); 

  return (
    <div> 
      {renderEvents} 
    </div> 
  ); 
}; 

export default EventsList; 