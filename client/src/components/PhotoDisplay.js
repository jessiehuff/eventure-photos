import React from 'react'; 

export const PhotoDisplay = props => {
    debugger 
    const photoListing = props.photos
    const renderPhotos = photoListing.map((photo, index) => 
        <img src={photo.photo_url} alt="photo uploads"></img>
    );

    return (
       <div>
          {renderPhotos}
       </div>
    );
}; 

export default PhotoDisplay; 