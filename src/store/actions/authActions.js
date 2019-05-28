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

    // TODO: consider using the signup resp obeject or a similar process to make document id and base campaign id the same
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
