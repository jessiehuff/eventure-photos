export function fetchEvents() {
  const events = [] 
  return {
    type: 'FETCH_EVENTS', 
    events 
  }; 
}

export function addEvent(event) {
  return (dispatch) => {  
    return fetch('http://localhost:3000/api/v1/events', {
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


// export function addPhoto(photo) {
//   return(dispath) => {
//     return fetch('http://localhost:3000/api/v1/events/:id/photos'), {
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