import React from 'react'; 

const ImageDisplay = props => 
    <div> 
        <h3>{props.event.name}</h3> 
        <p>Description: {props.event.description}</p> 
    </div> 

export default ImageDisplay; 