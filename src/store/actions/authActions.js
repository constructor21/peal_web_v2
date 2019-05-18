/*

The creditionals are the username and password

then & catch fire a callback function when they are complete, we are passing err into the one for catch

firebase has a built-in signout method

*/

export const signIn = (credentials) => {
  return (dispatch, getState, {getFirebase}) => {

    const firebase = getFirebase();

    firebase.auth().signInWithEmailAndPassword(
      credentials.email,
      credentials.password
    ).then(() => {
      dispatch({ type: 'LOGIN_SUCCESS' });
    }).catch((err) => {
      dispatch({ type: 'LOGIN_ERROR', err });
    });

    // TODO: rewatch video 28 & 29 and do implement that signup process right here if you see if needed later on 
  }
}

export const signOut = () => {
  return (dispatch, getState, {getFirebase}) => {

    const firebase = getFirebase();

    firebase.auth().signOut().then(() => {
      dispatch({ type: 'SIGNOUT_SUCCESS' })
    });
  }
}
