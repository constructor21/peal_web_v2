const initState = {
  creativeName: "",
  mediaFile: null
}


const mediaReducer = (state=initState, action) => {

  switch(action.type) {

    case 'ADD_MEDIA_NAME':
      console.log("trying to add creative name");
      state.creativeName+=action.payload
      // return state;

    case 'SAVE_MEDIA_FILE':
      console.log("inside the save media file reducer");
      state.mediaFile = action.payload
      console.log(state.mediaFile);
      console.log("exiting the save media file reducer");
      // return state;

    default:
      return state

  }
}

export default mediaReducer;
