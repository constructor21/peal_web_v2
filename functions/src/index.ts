import * as functions from 'firebase-functions';

const admin = require('firebase-admin');

admin.initializeApp();

const logging = require('@google-cloud/logging');

// const stripe = require('stripe')(functions.config().stripe.token);

const stripe = require('stripe')('sk_test_JtOjT7CwPuj7qfI9jPqVV1Lv');

// const currency = functions.config().stripe.currency || 'USD';

export const helloWorld = functions.https.onRequest((request, response) => {
  response.send("Testing function from Peal!");
});



// You need to try things off of this customer id ... don't create when the user is created..
// .... trigger it when the firestore action edits the document ...  conosle stuff to make sure its working

export const createStripeCustomer = functions.auth.user().onCreate(async (user) => {
  const customer = await stripe.customers.create({ email: user.email });
  return admin.firestore().collection('stripe_customers').doc(user.uid).set({ customer_id: customer.id });
});


/*
export const createCustomer = functions.firestore.document('stripe_customers').onCreate(async (snap, context) => {
  const customer = await stripe.customers.create({ email: user.email });
  return admin.firestore().collection('stripe_customers').doc(user.uid).set({ customer_id: customer.id });
})
*/

// Add a payment source (card) for a user by writing a stripe payment source token to Realtime database
export const addPaymentSource = functions.firestore.document('/stripe_customers/{userId}/tokens/{pushId}').onCreate(async (snap, context) => {
  const source = snap.data();

  if (source == null) {
    return null;
  }

  const token = source.token;

  try {
    const snapshot = await admin.firestore().collection('stripe_customers').doc(context.params.userId).get();
    const customer = snapshot.data().customer_id;
    const response = await stripe.customers.createSource(customer, { source: token });
    return admin.firestore().collection('stripe_customers').doc(context.params.userId).collection("sources").doc(response.fingerprint).set(response, { merge: true });
  } catch (error) {
    console.log(error);
    await snap.ref.set({ 'error': error }, { merge: true });
    return reportError(error, { user: context.params.userId });
  }
});



/*
TypeScript “error TS2533: Object is possibly 'null' or 'undefined'” occurs ...
used if (val != undefined) { } but that leads to a different error of "error TS7030: Not all code paths return a value"
went to tsconfig.json and added "strictNullChecks":false to supress the warnging
*/



// To keep on top of errors, we should raise a verbose error report with Stackdriver rather
// than simply relying on console.error. This will calculate users affected + send you email
// alerts, if you've opted into receiving them.
// [START reporterror]
function reportError(err, context = {}) {
  // This is the name of the StackDriver log stream that will receive the log
  // entry. This name can be any valid log stream name, but must contain "err"
  // in order for the error to be picked up by StackDriver Error Reporting.
  const logName = 'errors';
  const log = logging.log(logName);

  // https://cloud.google.com/logging/docs/api/ref_v2beta1/rest/v2beta1/MonitoredResource
  const metadata = {
    resource: {
      type: 'cloud_function',
      labels: { function_name: process.env.FUNCTION_NAME },
    },
  };

  // https://cloud.google.com/error-reporting/reference/rest/v1beta1/ErrorEvent
  const errorEvent = {
    message: err.stack,
    serviceContext: {
      service: process.env.FUNCTION_NAME,
      resourceType: 'cloud_function',
    },
    context: context,
  };

  // Write the error log entry
    return new Promise((resolve, reject) => {
      log.write(log.entry(metadata, errorEvent), (error) => {
        if (error) {
           reject(error);
        }
         resolve();
      });
    });
  }
