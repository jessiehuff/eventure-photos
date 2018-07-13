export default (state = [], action) => {
  switch (action.type) {
    case 'FETCH_EVENTS': 
      return action.events; 
    case 'ADD_EVENT': 
      debugger
      return state.concat(action.event) 
    case 'UPDATE_EVENT':
      const index = state.findIndex(event => event.id === action.event.id)
        return [
          ...state.slice(0, index), 
          action.event, 
          ...state.slice(index + 1)
        ]
    case 'DELETE_EVENT': 
      const events = state.filter(event => event.id !== action.id)
      return events 
    case 'RESET_FORM': 
      return state; 
    default: 
      return state; 
  }
}; 