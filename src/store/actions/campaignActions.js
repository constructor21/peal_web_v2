
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

    console.log("this is the state....")
    console.log(campaign);
    console.log("....")

    var authId = campaign.firebaseAuthId;

    var storageFolderName = campaign.authId
    var fileWithinFolderName = "campaign.authId"
    var theRealData = campaign.mediaFile.media

    console.log("the real data is...")
    console.log(campaign.mediaFile.media);
    console.log("...")
    console.log(theRealData);
    console.log("...")


//===========works=====================
    // const uploadTask = storage.ref(`${storageFolderName}/${fileWithinFolderName}`).put(theRealData);
    // // state changed is the defualt event listener
    // uploadTask.on('state_changed',
    // (snapshot) => {
    //   // progrss function ....
    //   // const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
    //   // this.setState({progress});
    // },
    // (error) => {
    //      // error function ....
    //   console.log(error);
    // },
    // () => {
    //
    // });

    //============================================

    //==============WORKS==================

    /*
    title: '',
    mediaTitle: this.props.creativeName,
    campaignLength: this.props.day,
    firebaseAuthId: '',
    mediaFile: this.props.mediaFile,
    authId: this.props.auth.uid
    */
    /*
    firestore.collection('aarons-campaigns').add({
      //aaron:"the truth"
      //...campaign,
      title: campaign.title,
      mediaTitle: campaign.mediaTitle,
      campaignLength: campaign.campaignLength,
      firebaseAuthId: campaign.firebaseAuthId,
      authId: campaign.authId,
      authorId: authId,
      createdAt: new Date()
    })
    */
    //============WORKS==========================

    /*
    firestore.collection('aarons-campaigns2').add({
      //aaron:"the truth"
      //...campaign,
      title: campaign.title,
      mediaTitle: campaign.mediaTitle,
      campaignLength: campaign.campaignLength,
      firebaseAuthId: campaign.firebaseAuthId,
      authId: campaign.authId,
      authorId: authId,
      createdAt: new Date()
    }).then(() => {
      console.log('Sucessfully chained a promise without breaking functionality!');
      // you need to do the upload function right here ...
      console.log("test34567890");
      firestore.collection('aarons-campaigns2').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
          console.log(doc.data().firebaseAuthId, doc.id);
          myMap.set(doc.data().firebaseAuthId, doc.id);
          console.log(myMap);
        })
        })
      });
      */
    //===============================

    //Get user id from firebase auth
    var user = "3yug76eg398he33riu";


    var getUniqueId = firestore.collection("campaigns-jean").doc();
    console.log(getUniqueId.id);

    firestore.collection('campaigns-jean').doc(getUniqueId.id).set({
      //aaron:"the truth"
      //...campaign,
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
        // progrss function ....
        // const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        // this.setState({progress});
      },
      (error) => {
           // error function ....
        console.log(error);
      },
      () => {

      });

    });

    /*
    firestore.collection('CampaignsFuture').document().add({
      //aaron:"the truth"
      //...campaign,
      title: campaign.title,
      mediaTitle: campaign.mediaTitle,
      campaignLength: campaign.campaignLength,
      firebaseAuthId: campaign.firebaseAuthId,
      authId: campaign.authId,
      authorId: authId,
      createdAt: new Date()
    }).
    */
    console.log("nothing else is important");
/*
    firestore.collection('campaigns').add({
      //aaron:"the truth"
      //...campaign,

      authorId: authId,
      createdAt: new Date()
    }).then(() => {
      console.log('Sucessfully chained a promise without breaking functionality!');
      // you need to do the upload function right here ...

      firestore.collection('campaigns').get().then((snapshot) => {
        snapshot.docs.forEach(doc => {
          myMap.set(doc.data().firebaseAuthId, doc.id);
        })

      }).then(() => {

        for (var [key, value] of myMap.entries()) {
          console.log("lskajflk;asfjklas;fjkl;sa")
          // if(key == authId) {
            console.log("perform handle upload with the file name being the doc.id (value of myMap)")
            var fileWithinFolderName = myMap.value

//`${storageFolderName}/${fileWithinFolderName}`
            const uploadTask = storage.ref("1234").put(theRealData);
            // state changed is the defualt event listener
            uploadTask.on('state_changed',
            (snapshot) => {
              // progrss function ....
              // const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
              // this.setState({progress});
            },
            (error) => {
                 // error function ....
              console.log(error);
            },
            () => {
                // complete function ....
                // storage.ref(`${storageFolderName}`).child(fileWithinFolderName).getDownloadURL().then(url => {
                //     console.log(url);
                //     this.setState({url});
                // })
            });




          // }
        }

      })


    }).then(() => {
      // resume the dispatch
      dispatch({ type: 'CREATE_CAMPAIGN_SUCCESS', campaign });
    }).catch(err => {
      dispatch({ type: 'CREATE_CAMPAIGN_ERROR' }, err);
    });
    */
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
