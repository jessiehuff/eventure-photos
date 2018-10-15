import React from 'react'; 

export const EventDisplay = ({name, description, cover_url}) => (
        <React.Fragment> 
            <br></br>
            <img src={cover_url} alt="event cover"></img> 
            <h4>{name}</h4>
            <p>Description: {description}</p>
            <br></br>
        </React.Fragment> 
)
    
export default EventDisplay; 
