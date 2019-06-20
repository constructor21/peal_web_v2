import React, { Component } from 'react';
import CampaignList from '../campaigns/CampaignList';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase' // connects a component to a firestore collection
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

import WelcomeMessage from './WelcomeMessage';

import './Dashboard.css'
// 12 colums on small sized screens, 6 colums on medium sized sceens

class Dashboard extends Component {


  state = {
    campaignsExist: false,
  };

  render() {

    // console.log(this.props);
    // use destructuring to grab these items from the props object
    const { campaigns, auth } = this.props;
    if (!auth.uid) return <Redirect to='/' />

    // console.log("these are the campaigns");
    // console.log({campaigns}.campaigns); // you can't take the length property because request to firestore takes time

    const { confirmBtnPressed } = this.props;


    if (confirmBtnPressed) {

      return (
        <div>

          <div className="dashboard container">
            <div className="row">
              <div className="col s12 m6">
                <CampaignList campaigns={campaigns} />
              </div>
              <div className="col s12 m5 offset-m1">
              </div>
            </div>
          </div>

        </div>
      )

    } else {

      return (
        <div>

          <WelcomeMessage />

          <div className="dashboard container">
            <div className="row">
              <div className="col s12 m6">
                <CampaignList campaigns={campaigns} />
              </div>
              <div className="col s12 m5 offset-m1">
              </div>
            </div>
          </div>

        </div>
      )
    }

  }
}

// mapStateToProps is this function always by convention
const mapStateToProps = (state, ownProps) => {
  // accessing the state of the redux store

  console.log("trying to get confirm property")
  console.log(state.firestore.data.initialBillFlow)
  console.log("****////*****")

  return {
    // decides which props get passed from the store to this component
      // the first campaigns is just what you named this object
      // campaign comes from the root reducer
      // the second campaigns comes from the campaignReducer
    campaigns: state.firestore.ordered.campaigns, // ordered is just a required keyword for pulling from firestore
    confirmBtnPressed: state.firestore.data.initialBillFlow,
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'campaigns', orderBy: ['createdAt', 'desc'] },
    { collection: 'initialBillFlow' }
  ])
)(Dashboard)
// `Customers/${state.firebase.auth}`