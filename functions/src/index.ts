import * as functions from 'firebase-functions';

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//

// firebase deploy --only functions

export const helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Peal!");
});
