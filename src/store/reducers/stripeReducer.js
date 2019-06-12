const initState = {
  cardCharged: false,
}

const stripeReducer = (state = initState, action) => {

  switch (action.type) {

    case 'CHARGE_STRIPE_USER':
      console.log('successfully charged user');
      state.cardCharged = true
      return state;

    default:
      return state;

  }

}

export default stripeReducer
