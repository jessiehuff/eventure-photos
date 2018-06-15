export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_EVENTS': 
      return action.events; 
    case 'ADD_EVENT': 
      const event = Object.assign({}, action.event, { id: state.length + 1 }); 
      return [...state, event]; 
    default: 
      return state; 
  }
}; 