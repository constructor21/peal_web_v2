const functions = require('firebase-functions');
const admin = require('firebase-admin');

const {Storage} = require('@google-cloud/storage');

admin.initializeApp(functions.config().firebase);

// https://cloud.google.com/storage/docs/listing-objects#storage-list-objects-nodejs
// https://cloud.google.com/storage/docs/renaming-copying-moving-objects#storage-rename-object-nodejs


async function replaceMediaNamesWithCampaignId(campaignId) {

  const storage = new Storage();
  const bucketName = campaignId;

  const [files] = await storage.bucket(bucketName).getFiles();

  files.forEach(file => {
    console.log(file.name);  // this didn't work because the bucket name needs to be the auth id 
  });
  console.log("cloud function ended");

  /*

  // const bucketName = 'Name of a bucket, e.g. my-bucket';
  // const srcFilename = 'File to move, e.g. file.txt';
  // const destFilename = 'Destination for file, e.g. moved.txt';

  // Moves the file within the bucket
  await storage
    .bucket(bucketName)
    .file(file.name)
    .move(campaignId);

  */

}


// firestore is the trigger (whenever a new project is created in this collection we fire the callback from this function)
exports.campaignCreated = functions.firestore
  .document('campaigns/{campaignId}')
  .onCreate(doc => {

    console.log("cloud function started");
    const campaignId = doc.id;
    console.log(campaignId);

    return replaceMediaNamesWithCampaignId(campaignId);

});



/*

// this all runs on the firesbase server ... not in the browser

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions


// firebase deploy --only functions      -> everytime you add a new function





    // returns an endpoint (url) in the terminal (via a request).
    // When you ctrl + click it a response will be sent back "Hello Peal Users"

    // https://us-central1-peal-web-v2.cloudfunctions.net/helloWorld

exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello Peal Users!");
});


*/
