import authReducer from './authReducer'
import campaignReducer from './campaignReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  auth: authReducer,
  campaign: campaignReducer
});

export default rootReducer
