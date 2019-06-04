
import {storage} from '../../config/fbConfig';

// normally an action returns an object but because of thunk we can return a function
// dispatch: method that dispatches an action to the reducer
// by returning a function instead of an action that is how we are halting things to make the async call
export const createCampaign = (campaign) => {
  // firebase and firestore functions know about the database because of thunk in index.js
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make async call to database (because it takes some time to do that means it returns a promise)
    const firestore = getFirestore();

    var myMap = new Map();

    var authId = campaign.firebaseAuthId;

    var storageFolderName = campaign.authId
    var theRealData = campaign.mediaFile.media

    var getUniqueId = firestore.collection("campaigns-test").doc();
    console.log(getUniqueId.id);

    firestore.collection('campaigns-test').doc(getUniqueId.id).set({
      title: campaign.title,
      mediaTitle: campaign.mediaTitle,
      campaignLength: campaign.campaignLength,
      firebaseAuthId: campaign.firebaseAuthId,
      authId: campaign.authId,
      authorId: authId,
      createdAt: new Date()
    }).then(() => {

      const uploadTask = storage.ref(`${storageFolderName}/${getUniqueId.id}`).put(theRealData);
      // state changed is the defualt event listener
      uploadTask.on('state_changed',
      (snapshot) => {

      },
      (error) => {
           // error function ....
        console.log(error);
      },
      () => {

      });

    });

  }

};



export const deleteCampaign = (documentId) =>  {
  return (dispatch, getState, {getFirebase, getFirestore}) => {

    const firestore = getFirestore();

    var myMap = new Map();

    firestore.collection('campaigns').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        // console.log(doc.data().firebaseAuthId)  // this is simply an object... have a seperate method that pulls out the firebaseAuthId
        // console.log(doc.id)
        myMap.set(doc.data().firebaseAuthId, doc.id);

        // 1. build a hashmap with firebaseAuthId as key, doc.id as value
        // 2. Delete the appropiate document
      })
    }).then(() => {
      console.log(myMap);
      for (var [key, value] of myMap.entries()) {
        console.log(key + ' = ' + value);

        if(key === documentId) {

          firestore.collection('campaigns').doc(myMap.get(documentId)).delete().then(() => {
            dispatch({ type: 'DELETE_CAMPAIGN_SUCCESS', documentId });
          }).catch(err => {
            dispatch({ type: 'DELETE_CAMPAIGN_ERROR' }, err);
          });

        }

      }
    })

  }
};
