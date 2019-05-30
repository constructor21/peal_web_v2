
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Success from './Success';
import BillingContainer from './BillingContainer';

class BillingCenter extends Component {

  state = {
    paymentInfoAdded: false,
  };

// some if statement that accesses state ... if clicked confirmed then show Sucess page, if not then the billing component
  render() {

    const { auth } = this.props;

    if (!auth.uid) return <Redirect to='/' />

    const { confirmBtnPressed } = this.props;
    const { locationInfo } = this.props;
    console.log("billing:")
    console.log(confirmBtnPressed);
    console.log(locationInfo);

    if (confirmBtnPressed) {
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

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    confirmBtnPressed: state.billing.confirmBtnPressed,
    locationInfo: state.billing.locationInfo
  }
}

export default connect(mapStateToProps)(BillingCenter)
