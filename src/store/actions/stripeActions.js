

export const addStripeToken = (authId, token) => {

  return (dispatch, getState, {getFirebase, getFirestore}) => {

    const firestore = getFirestore();

    console.log("in the stripe action")

    firestore.collection('stripe_customers').doc(authId).collection('tokens').add({ token: token });

  }
};


export const createStripeCharge = () => {

  return (dispatch, getState, {getFirebase, getFirestore}) => {

    const firestore = getFirestore();

  }
};
