const initState = {
  mediaFile: null
}

const mediaFileReducer = (state=initState, action) => {

  switch(action.type) {

    case 'SAVE_MEDIA_FILE':
      console.log("inside the save media file reducer");
      state = action.payload
      console.log(state);
      console.log("exiting the save media file reducer");
      return state;

    default:
      return state

  }
}

export default mediaFileReducer;
