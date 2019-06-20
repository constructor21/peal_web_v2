
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import { firestoreConnect } from 'react-redux-firebase' // connects a component to a firestore collection
import { compose } from 'redux'

import Success from './Success';
import BillingContainer from './BillingContainer';

class BillingCenter extends Component {

  state = {

  };

  render() {

    const { auth } = this.props;

    if (!auth.uid) return <Redirect to='/' />

    const { confirmBtnPressed } = this.props;
    const { locationInfo } = this.props;
    console.log("billing:")
    console.log(confirmBtnPressed);
    console.log(locationInfo);

    if (confirmBtnPressed) {        // this the example you should follow of conditional rendering
      return (
        <div>
          <Success />
        </div>
      )
    } else {
      return (
        <div>
          <BillingContainer />
        </div>
      )
    }


  }

}

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.firebase.auth,
    confirmBtnPressed: state.firestore.data.initialBillFlow,
    locationInfo: state.billing.locationInfo
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'initialBillFlow' }
  ])
)(BillingCenter)
