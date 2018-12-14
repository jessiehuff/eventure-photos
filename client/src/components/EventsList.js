import React from 'react'; 
import { Link } from 'react-router-dom'; 

const EventsList = props => {
  const eventListing = props.events
  const renderEvents = eventListing.map((event) => 
  <div class="card border-dark mb-3" styles="max-width: 18 rem;">
    <div class="card-body"> 
     <h5 key={event.id}><Link to={`/events/${event.id}`}>
     <img class="card-img-top" src={event.cover_url} alt="event cover" />

      {event.name} 
      </Link></h5> 
      </div> 
    </div>
   );
 
  return (
    <div>
      {renderEvents}
    </div> 
  ); 
}; 

export default EventsList; 