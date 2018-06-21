export function fetchEvents() {
  const events = [] 
  return {
    type: 'FETCH_EVENTS', 
    events 
  }; 
}

export function addEvent(event) {
  return (dispatch) => { 
    dispatch({ type: 'START_ADDING_EVENTS_REQUEST'}); 
    return 
    fetch('http://localhost:3000/api/v1/events', {
      method: 'POST', 
      headers: {}, 
      body: JSON.stringify(event)
    })
      .then(response => response.json())
      .then(responseJSON => {
        let events = responseJSON.map(n => n.name).sort(); 
        dispatch({type: 'ADD_EVENT', payload: events})
      });
  }; 
}; 