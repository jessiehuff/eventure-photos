import React from 'react'; 

export const EventDisplay = ({name, description, cover, photos}) => (
        <React.Fragment> 
            <img src={cover} alt="event cover"></img> 
            <h4>{name}</h4>
            <p>Description: {description}</p>
            <br></br> 
            <img src={photos} alt="uploads"></img>
            <br></br><br></br>
            <br></br><br></br>
        </React.Fragment> 
)
    
export default EventDisplay; 