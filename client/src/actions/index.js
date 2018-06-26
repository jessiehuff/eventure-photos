export function fetchEvents() {
  const events = [] 
  return {
    type: 'FETCH_EVENTS', 
    events 
  }; 
}

export function addEvent(event) {
  debugger
  return (dispatch) => {  
    return fetch(`http://localhost:3000/api/v1/events`, {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({event: event})
    })
      .then(response => response.json())
      .then(responseJSON => {
        let events = responseJSON.map(n => n.name).sort(); 
        dispatch({type: 'ADD_EVENT', payload: events})
      })
      .catch(error => console.log(error))
  }; 
}; 

// export const updateEvent = (eventId, event) => {
//   return dispatch => {
//     return fetch(`http://localhost:3000/api/v1/events/${eventId}`, {
//       method: "PATCH", 
//       headers: {
//         'Content-Ty[e': 'application/json'
//       },
//       body: JSON.stringify({event: event})
//     })
//     .then(response => response.json())
//     .then(event => {
//       dispatch(setSelectedEvent(event))
//       dispatch(resetEventForm())
//     })
//     .catch(error => console.log(error))
//   }; 
// }

// const setSelectedEvent = event => {
//   return {
//     type: 'UPDATE_EVENT', 
//     event
//   }
// }

// export const resetEventForm = () => {
//   return {
//     type: 'RESET_FORM'
//   }
// }

export const deleteEvent = eventId => {
  return dispatch => {
    return fetch(`/events/${eventId}`, {
      method: "DELETE", 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify({event: eventId})
    })
      .then(response => response.json())
      .then(event => {
        dispatch(destroyEvent(event))
      })
      .catch(error => console.log(error))
  };
}


// export function addPhoto(photo) {
//   return(dispath) => {
//     return fetch('/api/v1/events/:id/photos'), {
//       method: 'POST', 
//       headers: {
//         'Content-Type': 'application/json' 
//       }, 
//       body: JSON.stringify({photo: photo})
//     })
//       .then(response => response.json())
//       .then(responseJSON => {
//         let photos = responseJSON.map(c => c.created_at).sort(); 
//         dispatch({type: 'ADD_PHOTO', paylodad: photos})
//       })
//       .catch(error => console.log(error))
//   }; 
// }; 
