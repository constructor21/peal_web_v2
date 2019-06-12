

export const addStripeToken = (authId, token) => {

  return (dispatch, getState, {getFirebase, getFirestore}) => {

    const firestore = getFirestore();

    console.log("in the add stripe token action")

    firestore.collection('stripe_customers').doc(authId).collection('tokens').add({ token: token });

  }
};


export const createStripeCharge = (authId, card) => {

  return (dispatch, getState, {getFirebase, getFirestore}) => {

    const firestore = getFirestore();

    console.log("in the create stripe charge action")

    firestore.collection('stripe_customers').doc(authId).collection('charges').add({ amount: 100, source: card });

  }
};
