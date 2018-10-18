import React from 'react'; 
import { Link } from 'react-router-dom'; 

export const PhotoDisplay = props => {  
    const photoListing = props.photos
    const filteredPhotos = photoListing.filter(photo => {
        return photo.event_id === props.event_id; 
    }); 
    const renderPhotos = filteredPhotos.map((photo, index) => 
        <span key={index}>
        <Link to={`/events/${props.event_id}/photos/${photo.id}`}> 
        <img src={photo.photo_url} alt="photo uploads"></img></Link>   </span>
    );

    return (
       <div>
          {renderPhotos}
       </div>
    );
}; 

export default PhotoDisplay; 