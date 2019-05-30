const initState = {
  creativeName: "",
}


const mediaReducer = (state=initState, action) => {

  switch(action.type) {

    case 'ADD_MEDIA_NAME':
      return state.creativeName+=action.payload

    default:
      return state

  }
}

export default mediaReducer;
