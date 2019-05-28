import authReducer from './authReducer'
import campaignReducer from './campaignReducer'
import dayPickerReducer from './dayPickerReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'      // premade reducer for syncing firestore with store state
import { firebaseReducer } from 'react-redux-firebase'  // premade reducer that will sync firebase auth status with store state

const rootReducer = combineReducers({
  auth: authReducer,
  campaign: campaignReducer,
  firestore: firestoreReducer,
  firebase: firebaseReducer,
  day: dayPickerReducer
});

export default rootReducer
