import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
//import { deletePhoto } from '../actions'; 

class PhotoShow extends Component {

    // handleDelete = (photo) => {
    //     event.preventDefault(photo); 
    //     this.props.deletePhoto(this.props.photo)
    //     this.props.history.push('/events/${event_id}')
    // }

    render() {
        debugger 
        return(
            <React.Fragment>
                <br></br><br></br> 
                <img src={this.props.photo.photo_url} alt="from gallery"></img> 
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const allPhotos = state.events.photos 
    const photosArray = Object.keys(allPhotos).map(i => state.events.photos[i])
    const photo = photosArray.find(photo => photo.id === parseInt(ownProps.match.params.photoId, 10))

    if (photo) {
        return {photo}
    }
    else {
        return {photo: []}
    }
}


export default connect(mapStateToProps)(PhotoShow); 