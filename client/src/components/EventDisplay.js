import React from 'react'; 

const EventDisplay = props => 
    <div> 
        <h3>{props.event.name}</h3> 
        <p>Description: {props.event.description}</p> 
    </div> 

export default EventDisplay; 