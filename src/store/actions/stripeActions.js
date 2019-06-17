

export const addStripeToken = (authId, token) => {

  return (dispatch, getState, {getFirebase, getFirestore}) => {

    const firestore = getFirestore();

    console.log("in the add stripe token action")

    firestore.collection('stripe_customers').doc(authId).collection('tokens').add({ token: token });

  }
};
