import {v4} from 'node-uuid'; 

export function fetchEvents() {
  return (dispatch) => {
    return fetch('http://localhost:3000/api/v1/events', {
      headers: {
        'Content-Type': 'application/json', 
        'Accept': 'application/json'
      }
    }) 
    .then(response => response.json()) 
    .then(events => dispatch({type: 'FETCH_EVENTS', events}))
  }
}

export function addEvent(values) {
  return (dispatch) => {
    const eventData = new FormData() 
    eventData.append("event[name]", values.name)
    eventData.append("event[description]", values.description)
    eventData.append("event[cover]", values.cover)
    eventData.append("event[id]", values.id)

    return fetch(`http://localhost:3000/api/v1/events`, {
      method: 'post', 
      body: eventData, 
      contentType: false  
    })
    .then(res => {  
      return res.json()
      })
        .then(event => {
          dispatch({
            type: 'ADD_EVENT', 
            payload: event,
            id: v4()
          })
        }) 
    }
}

export function deleteEvent(event) {
  return (dispatch) => {
    let id = event.id
    return fetch(`http://localhost:3000/api/v1/events/${event.id}`, {
      method: 'delete'
    }) 
    .then(event => {
      dispatch({
        type: 'DELETE_EVENT',
        payload: id
      })
      localStorage.clear(); 
    })
  }
}

export function addPhoto(values){
  return (dispatch) => {
    
    debugger 
    const photoData = new FormData() 
    photoData.append("photo[filename]", values.filename)
    photoData.append("photo[id]", values.id)
    photoData.append("photo[event]", values.event)
    
    let eventId = values.event.id 

    return fetch(`http://localhost:3000/api/v1/events/${eventId}/photos`, {
      method: 'post', 
      body: photoData, 
      contentType: false
    })
    .then(res => { 
      return res.json() 
      })
        .then(photo => {
          dispatch({
            type: 'ADD_PHOTO', 
            payload: photo,
            id: v4()
          })
    })
  }
}

