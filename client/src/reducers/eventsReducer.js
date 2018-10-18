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
        ] 
       };
    case 'ADD_PHOTO':  
      return {
        ...state, 
        photos: [
          ...state.photos.concat(action.payload),
      ]
    }  
    case 'DELETE_PHOTO': 
      const newPhotos = state.photos.filter(photo => photo.id !== action.payload)
      return {
        ...state, 
        photos: [
          ...newPhotos
        ]
      }
      case 'UPDATE_EVENT': 
      const index = state.events.findIndex(event => event.id === action.payload.id) 
        return {
          ...state, 
          events: [
            ...state.events.slice(0, index), 
            action.payload, 
            ...state.events.slice(index + 1)
          ]
        }
    case 'DELETE_EVENT': 
      const newEvents = state.events.filter(event => event.id !== action.payload)
      return {
        ...state,
        events: [
          ...newEvents
        ]
      } 
    default: 
      return state; 
  }
}; 