
import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

class BillingCenter extends Component {

  state = {
    paymentInfoAdded: false,
  }

  render() {

    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/' />

    return (
      <div>
        <p> Add stripe and sign-in form in here </p>
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
