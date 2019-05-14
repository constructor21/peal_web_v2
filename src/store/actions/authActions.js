/*
The creditionals are the username and password

catch is callback function, we are passing err into it
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

  }
}
