export default (state ={
  events: [],
  photos: []
}, action) => {
  switch (action.type) {
    case 'FETCH_EVENTS': 
      return {
        ...state, 
        events: action.events
      }; 
    case 'ADD_EVENT':  
      return {
        ...state, 
        events: [
          ...state.events.concat(action.payload),
        ], 
       }
    // case 'ADD_PHOTO':  
    //   return [
    //     ...state, 
    //     photos: {
    //       ...state.photos
    //     }
    //   ]  
    // case 'UPDATE_EVENT':
    //   const index = state.findIndex(event => event.id === action.event.id)
    //     return [
    //       ...state.slice(0, index), 
    //       action.event, 
    //       ...state.slice(index + 1)
    //     ]
    case 'DELETE_EVENT': 
      const newEvents = state.events.filter(event => event.id !== action.payload)
      return newEvents 
    default: 
      return state; 
  }
}; 