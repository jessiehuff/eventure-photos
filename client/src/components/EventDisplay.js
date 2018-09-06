import React from 'react'; 

var myCover = new Image(100, 200); 
// myCover.src = image_url //need to set source path somehow 

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