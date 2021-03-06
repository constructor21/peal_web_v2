import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk' // middleware

// a store requires a single reducer to be passed in
  // I created multiple reducers and passed them all into a root reducer that I am passing into the store
import { reduxFirestore, getFirestore } from 'redux-firestore';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase';
import fbConfig from './config/fbConfig'

// requires a single reducer to be passed in
  // I created multiple reducers and passed them all into a root reducer that I am passing into the store
  // compose is needed to use multiple store enhancers
const store = createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase, getFirestore})),
    reactReduxFirebase(fbConfig, {attachAuthIsReady: true}), // redux binding for firebase
    reduxFirestore(fbConfig) // redux bindings for firestore
  )
);

// returns a promise that waits for firebase auth to occur. Can you be used to delay the dom rendering until this occurs.
store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
  // If you want your app to work offline and load faster, you can change
  // unregister() to register() below. Note this comes with some pitfalls.
  // Learn more about service workers: https://bit.ly/CRA-PWA
  serviceWorker.unregister();
});
