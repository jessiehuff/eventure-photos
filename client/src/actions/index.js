export function fetchEvents() {
  const events = [] 
  return {
    type: 'FETCH_EVENTS', 
    events 
  }; 
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
      // if (res.status === 201 ) {
        return res.json()
      })
        .then(event => {
          dispatch({
            type: 'ADD_EVENT', 
            payload: event
          })
        //  history.push(`/events/${event.event_id}`)
      //  })
      // } else {
      //   res.json()
      //   .then(response => {
      //     const creationAttempt = {message: response}
      //     dispatch({
      //       type: 'ADD_EVENT', 
      //       payload: creationAttempt
      //     })
      //   })
      // }
    })
  }
}

