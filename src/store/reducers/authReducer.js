/*
The state in this component is linked to the auth object in the root reducer
The spread operator gets the current state
What comes after the comma (authError in this case) is added onto the object that comes from the spread operator 
*/

const initState = {
  authError: null
}

const authReducer = (state = initState, action) => {
  switch(action.type){
    case 'LOGIN_ERROR':
      console.log('login error');
      return {
        ...state,
        authError: 'Login failed'
      }
    case 'LOGIN_SUCCESS':
      console.log('login success');
      return {
        authError: null
      }
    default:
      return state
  }
};

export default authReducer;
