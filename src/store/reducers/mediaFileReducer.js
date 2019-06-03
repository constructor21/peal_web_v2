const initState = {
  mediaFile: null
}

const mediaFileReducer = (state=initState, action) => {

  switch(action.type) {

    case 'SAVE_MEDIA_FILE':
      console.log("inside the save media file reducer");
      state.mediaFile = action.payload
      console.log(state.mediaFile);
      console.log("exiting the save media file reducer");
      return state;

    default:
      return state

  }
}

export default mediaFileReducer;
