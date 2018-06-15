export function fetchEvents() {
  const events = [] 
  return {
    type: 'FETCH_EVENTS', 
    events 
  }; 
}

export function addEvent(event) {
  return {
    type: 'ADD_EVENT', 
    event 
  }; 
}; 