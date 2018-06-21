export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_EVENTS': 
      return action.events; 
    case 'ADD_EVENT': 
      return state.concat(action.event) 
    default: 
      return state; 
  }
}; 