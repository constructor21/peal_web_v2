
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import BillingContainer from './BillingContainer';

class BillingCenter extends Component {

  state = {
    paymentInfoAdded: false,
  };


  render() {

    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/' />

    return (
      <div>
        <p> If they haven't entered info before it needs to have a welcome message </p>
        <p> Add Stripe here: They need to enter their company name, address & payment info </p>
        <p> If they've already entered it then needs to show a panel with their payment history and ability to add / remove cards </p>

        <p> The billing address sends a cloud function so that when they sign in it shows them all the displays in their area on the locations tab</p>

        <BillingContainer />

      </div>
    )
  }

}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(BillingCenter)
