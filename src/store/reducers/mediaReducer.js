
const mediaReducer = (state=[], action) => {

  switch(action.type) {

    case 'ADD_MEDIA_NAME':
      return [...state, action.payload]

    default:
      return state

  }
}

export default mediaReducer;
