import authReducer from './authReducer'
import campaignReducer from './campaignReducer'
import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'; // premade reducer for syncing firestore with our store state

const rootReducer = combineReducers({
  auth: authReducer,
  campaign: campaignReducer,
  firestore: firestoreReducer
});

export default rootReducer
