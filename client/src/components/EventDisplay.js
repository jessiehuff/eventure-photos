import React from 'react'; 

//var myCover = new Image(100, 200); 
// myCover.src = {this.props.event.cover} //something like this or need mapStateToProps?
// myCover.src = cover_url //need to set source path somehow 

export const EventDisplay = ({name, description, cover_url}) => (
        <React.Fragment> 
            <br></br>
            <img src={cover_url} alt="event cover"></img> 
            <h4>{name}</h4>
            <p>Description: {description}</p>
            <br></br>
        </React.Fragment> 
)
    
export default EventDisplay; 
