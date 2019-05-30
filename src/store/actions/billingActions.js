
export const saveLocationInfo = (locationArray) => {
  return (dispatch, getState) => {
    // puase dispatch
    // make async call to database

    // resume dispatch
    dispatch({ type: 'SAVE_LOCATION_INFO', locationArray });
  }
};
