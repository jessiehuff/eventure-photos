import React from 'react'; 

export const EventDisplay = ({name, description, cover}) => (
        <React.Fragment> 
            <h4>{name}</h4>
            <p>Description: {description}</p>
            <img src={cover}></img> 
            <br></br><br></br>
            <br></br><br></br>
        </React.Fragment> 
)
    
export default EventDisplay; 