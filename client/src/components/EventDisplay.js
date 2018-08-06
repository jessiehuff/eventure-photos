import React from 'react'; 

const EventDisplay = ({name, description}) => (
        <React.Fragment> 
            <h4>{name}</h4>
            <p>Description: {description}</p>
        </React.Fragment> 
)
    
export default EventDisplay; 