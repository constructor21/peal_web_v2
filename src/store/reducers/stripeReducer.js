/*
  Actions initiate actions.
  Reducers manage state and share it with the rest of the application.

  Action called first, reducer changes state before handing it to the store 
*/

const initState = {
  tokenCreated: false,
  cardCharged: false,
}

const stripeReducer = (state = initState, action) => {

  switch (action.type) {

    case 'CREATE_TOKEN':
      console.log('successfully created token');
      state.tokenCreated = true
      return state;

    case 'CHARGE_STRIPE_USER':
      console.log('successfully charged user');
      state.cardCharged = true
      return state;

    default:
      return state;

  }

}

export default stripeReducer
