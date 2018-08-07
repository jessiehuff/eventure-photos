import React from 'react'; 

const EventDisplay = ({name, description, cover}) => (
        <React.Fragment> 
            <h4>{name}</h4>
            <p>Description: {description}</p>
            <img src={cover}></img> 
            <br></br><br></br>
            <br></br><br></br>
            <button 
                onClick={this.deleteEvent}>Delete Event
            </button> 
        </React.Fragment> 
)
    
export default EventDisplay; 