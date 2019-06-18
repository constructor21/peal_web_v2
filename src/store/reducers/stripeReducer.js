/*
  Actions initiate actions.
  Reducers manage state and share it with the rest of the application.

  Action called first, reducer changes state before handing it to the store
*/

const initState = {
  last4digits: '',
  street: '',
  city: '',
  zipCode: ''
}

const stripeReducer = (state = initState, action) => {

  switch (action.type) {

    case 'CREATE_TOKEN':
      console.log('in token creation reducer');
      state.last4digits += action.payload
      return state;

    case 'SAVE_STREET':
      console.log('saving street');
      state.street += action.payload
      return state;

    case 'SAVE_CITY':
      console.log('saving city');
      state.city += action.payload
      return state;

    case 'SAVE_ZIP_CODE':
      console.log('saving zip code');
      state.zipCode += action.payload
      return state;

    default:
      return state;

  }

}

export default stripeReducer
