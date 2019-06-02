
const initState = {
  locationInfo: [],
  confirmBtnPressed: false,
}

const billingReducer = (state = initState, action) => {

  switch (action.type) {

    case 'SAVE_LOCATION_INFO':
      console.log('save location info success!', action.locationArray);
      state.confirmBtnPressed = true
      return state;
    case 'SAVE_LOCATION_ERROR':
      console.log('save location info error...');
      return state;
    default:
      return state;

  }

}

export default billingReducer
