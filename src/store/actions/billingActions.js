
export const saveLocationInfo = (locationArray) => {
    // puase dispatch
    // make async call to database
    return (dispatch, getState, {getFirebase, getFirestore}) => {
      const firestore = getFirestore();
      firestore.collection('businessLocation').add({
        ...locationArray,
      }).then(() => {
        // resume dispatch
        dispatch({ type: 'SAVE_LOCATION_INFO', locationArray });
      }).catch(err => {
        dispatch({ type: 'CREATE_CAMPAIGN_ERROR' }, err);
      });
  }
};
