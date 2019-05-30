

// Two Properties

    // Save confirm button details to firebase (the location data, in an array as a single field)
    // a confirm button pressed field set to true

const initState = {
  locationInfo: [],
  confirmBtnPressed: false,
}

const billingReducer = (state = initState, action) => {

  switch (action.type) {

    case 'SAVE_LOCATION_INFO':
      console.log('save location info success!', action.locationArray);
      return state;
    default:
      return state;

  }

}

export default billingReducer
