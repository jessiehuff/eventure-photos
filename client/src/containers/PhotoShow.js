import React, {Component} from 'react'; 
import { connect } from 'react-redux'; 
import { deletePhoto } from '../actions'; 

class PhotoShow extends Component {

    handleDelete = (event) => {
        event.preventDefault(event); 
        //const id = this.props.photo.event_id
        this.props.deletePhoto(this.props.photo)
        this.props.history.push('/events')
    }

    render() {
        return(
            <React.Fragment>
                <br></br><br></br> 
                <img src={this.props.photo.photo_url} alt="from gallery"></img> 
                <br></br><br></br> 
                <br></br><br></br> 

                <button 
                    onClick={this.handleDelete}>
                    Delete Photo 
                </button> 
            
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


export default connect(mapStateToProps, {deletePhoto})(PhotoShow); 