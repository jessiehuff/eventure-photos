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

    return fetch(`http://localhost:3000/api/v1/events`, {
      method: 'post', 
      body: eventData 
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
    return fetch(`http://localhost:3000/api/v1/events/${event.props.event.id}`, {
      method: 'delete'
    }) 
    .then(event => {
      dispatch({
        type: 'DELETE_EVENT',
        payload: event
      })
      localStorage.clear(); 
    })
  }
}
