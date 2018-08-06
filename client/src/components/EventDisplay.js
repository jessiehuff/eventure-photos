import React from 'react'; 

const EventDisplay = ({name, description, cover}) => (
        <React.Fragment> 
            <h4>{name}</h4>
            <p>Description: {description}</p>
            <img src={cover}></img> 
        </React.Fragment> 
)
    
export default EventDisplay; 