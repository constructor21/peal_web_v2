import authReducer from './authReducer'
import campaignReducer from './campaignReducer'
import dayPickerReducer from './dayPickerReducer'
import mediaReducer from './mediaReducer'
import billingReducer from './billingReducer'
import mediaFileReducer from './mediaFileReducer'
import { combineReducers } from 'redux'                 // combines all the reducers into one
import { firestoreReducer } from 'redux-firestore'      // premade reducer for syncing firestore with store state
import { firebaseReducer } from 'react-redux-firebase'  // premade reducer that will sync firebase auth status with store state

// stored in the state under a property with a name equal to the key (red letters)
const rootReducer = combineReducers({
  auth: authReducer,
  campaign: campaignReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  day: dayPickerReducer,
  creativeName: mediaReducer,
  mediaFile: mediaFileReducer,
  billing: billingReducer
});

export default rootReducer
