const initState = {
  creativeName: ""
}


const mediaReducer = (state=initState, action) => {

  switch(action.type) {

    case 'ADD_MEDIA_NAME':
      console.log("trying to add creative name");
      state.creativeName+=action.payload
      return state;

    default:
      return state

  }
}

export default mediaReducer;
