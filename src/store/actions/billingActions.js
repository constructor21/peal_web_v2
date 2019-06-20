
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
        dispatch({ type: 'SAVE_LOCATION_ERROR' }, err);
      });
  }
};

export const saveConfirmBtnYEStoFirestore = () => {
  // puase dispatch
  // make async call to database
  return (dispatch, getState, {getFirebase, getFirestore}) => {

    const firestore = getFirestore();

    var getUniqueId = firestore.collection("campaigns").doc();

    firestore.collection('initialBillFlow').doc(getUniqueId.id).set({
      confirmBtnPressed: "YES"
    });

  }

};
