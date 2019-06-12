import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

const admin = require('firebase-admin');

admin.initializeApp();

// const logging = require('@google-cloud/logging');

const stripe = require('stripe')(functions.config().stripe.token);

// const currency = functions.config().stripe.currency || 'USD';


export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Testing function from Peal!");
});


// When a user is created, register them with Stripe
export const createStripeCustomer = functions.auth.user().onCreate(async (user) => {
  const customer = await stripe.customers.create({ email: user.email });
  return admin.firestore().collection('stripe_customers').doc(user.uid).set({ customer_id: customer.id });
});
