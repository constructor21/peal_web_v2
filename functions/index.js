

// TODO: check if this still works if you change to .ts file 



const functions = require('firebase-functions');
const admin = require('firebase-admin');

const {Storage} = require('@google-cloud/storage');
const gcs = require('@google-cloud/storage')();
const os = require('os');
const path = require('path');

admin.initializeApp(functions.config().firebase);

// https://cloud.google.com/storage/docs/listing-objects#storage-list-objects-nodejs
// https://cloud.google.com/storage/docs/renaming-copying-moving-objects#storage-rename-object-nodejs
// https://cloud.google.com/nodejs/docs/reference/storage/1.3.x/Bucket
// https://stackoverflow.com/questions/45820400/firebase-functions-change-filename-for-uploaded-file-in-storage


async function replaceMediaNamesWithCampaignId(campaignId) {

  const storage = new Storage();
  // const bucketName = campaignId;

  const [files] = await storage.bucket('0wDVqgKc9EQRgwSJuWCn5Wrvt1o2/').getFiles(); // this didn't work either...
    // look up what the name of a bucket actually is

  files.forEach(file => {
    console.log(file.name);  // this didn't work because the bucket name needs to be the auth id
  });
  console.log("cloud function ended");

  /* ... use a promise to get to the next await?

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


/* This should renmae all the files in the bucket if they weren't in folders...




// object is the default bucket ... that's the peal-web-v2-appspot.com !!!!
exports.testMethod = functions.storage.object().onChange(event => {

  // step1
  console.log(event);

  // step2
  const object = event.data;
  const bucket = object.bucket;
  const contentType = object.contentType;
  const filePath = object.name;

  // make sure you don't have an infinite loop
  if (path.basename(filePath).startsWith('renamed-')) {
    console.log("already renamed this file");
    return;
  }

  // download
  const destBucket = gcs.bucket(bucket);
  const tmpFilePath = path.join(os.tmpdir(), path.basename(filePath));
  const metadata = { contentType: contentType };
  return destBucket.file(filePath).download({
    destination: tmpFilePath
  }).then(() => {
    // rename
    return destBucket.upload(tmpFilePath, {
      destination: 'renamed-' + path.basename(filePath)
      metadata: metadata
    })
  });
});





*/


// TODO: use cloud functions to send mail chimp welcome emails
