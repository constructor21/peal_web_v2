
// normally an action returns an object but because of thunk we can return a function
// dispatch: method that dispatches an action to the reducer
// by returning a function instead of an action that is how we are halting things to make the async call
export const createCampaign = (campaign) => {
  // firebase and firestore functions know about the database because of the middleware in index.js
  return (dispatch, getState, {getFirebase, getFirestore}) => {
    // make async call to database (because it takes some time to do that means it returns a promise)
    const firestore = getFirestore();
    firestore.collection('campaigns').add({
      ...campaign,
      companyName: 'JimmyJam',
      authorId: 12345,
      createdAt: new Date()
    }).then(() => {
      // resume the dispatch
      dispatch({ type: 'CREATE_CAMPAIGN_SUCCESS', campaign });
    }).catch(err => {
      dispatch({ type: 'CREATE_PROJECT_ERROR' }, err);
    });
  }
};
