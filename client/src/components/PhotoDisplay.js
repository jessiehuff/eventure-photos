import React from 'react'; 

export const PhotoDisplay = props => {
    debugger 
    const photoListing = props.photos
    const filteredPhotos = photoListing.filter(photo => {
        return photo.event_id === props.event_id; 
    }); 
    const renderPhotos = filteredPhotos.map((photo, index) => 
        <span key={index}> <img src={photo.photo_url} alt="photo uploads"></img></span>
    );

    return (
       <div>
          {renderPhotos}
       </div>
    );
}; 

export default PhotoDisplay; 