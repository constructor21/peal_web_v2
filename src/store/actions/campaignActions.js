
// normally an action returns an object but because of thunk we can return a function
// dispatch: method that dispatches an action to the reducer
// by returning a function instead of an action that is how we are halting things to make the async call
export const createCampaign = (campaign) => {
  // firebase and firestore functions know about the database because of thunk in index.js
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make async call to database (because it takes some time to do that means it returns a promise)
    const firestore = getFirestore();
    // instead of campaigns you can put     campaign.title     because this.state = campaign
    var authId = campaign.firebaseAuthId;
    firestore.collection('campaigns').add({
      ...campaign,
      authorId: authId,
      createdAt: new Date()
    }).then(() => {
      // resume the dispatch
      dispatch({ type: 'CREATE_CAMPAIGN_SUCCESS', campaign });
    }).catch(err => {
      dispatch({ type: 'CREATE_CAMPAIGN_ERROR' }, err);
    });
  }
};




function parseDocument(doc){
  return doc.firebaseAuthId;
};

// you need to make the firebase auth id a random number
export const deleteCampaign = (documentId) =>  {
  return (dispatch, getState, {getFirebase, getFirestore}) => {

    const firestore = getFirestore();
    var hashMap = {}

    firestore.collection('campaigns').get().then((snapshot) => {
      snapshot.docs.forEach(doc => {
        // console.log(doc.data())  // this is simply an object... have a seperate method that pulls out the firebaseAuthId
        // console.log(doc.id)

        // 1. build a hashmap with firebaseAuthId as key, doc.id as value
        hashMap[parseDocument(doc.data())] = doc.id
      })
    })

    console.log(hashMap);

    // 2. loop through the hashmap and if the campaign.firebaseAuthId == the key ....... delete the value
    const entries = Object.entries(hashMap)
    console.log(entries) // this is an empty array 

    for (var campaignId in hashMap) {
      console.log(campaignId);
      if(campaignId === documentId) {
        firestore.collection('campaigns').doc(hashMap[documentId]).delete().then(() => {
          dispatch({ type: 'DELETE_CAMPAIGN_SUCCESS', documentId });
        }).catch(err => {
          dispatch({ type: 'DELETE_CAMPAIGN_ERROR' }, err);
        });

      }
    }

  }
};
