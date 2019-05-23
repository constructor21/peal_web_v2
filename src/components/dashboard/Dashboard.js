import React, { Component } from 'react';
import CampaignList from '../campaigns/CampaignList';
import Metrics from './Metrics';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase' // connects a component to a firestore collection
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

// 12 colums on small sized screens, 6 colums on medium sized sceens

class Dashboard extends Component {

  render() {

    // console.log(this.props);
    // use destructuring to grab these items from the props object
    const { campaigns, auth } = this.props;
    if (!auth.uid) return <Redirect to='/' />

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <CampaignList campaigns={campaigns} />
          </div>
          <div className="col s12 m5 offset-m1">
            { /* <Metrics /> */ }
          </div>
        </div>
      </div>
    )
  }
}

// mapStateToProps is this function always by convention
const mapStateToProps = (state) => {
  // accessing the state of the redux store
  console.log(state);
  return {
    // decides which props get passed from the store to this component
      // the first campaigns is just what you named this object
      // campaign comes from the root reducer
      // the second campaigns comes from the campaignReducer
    campaigns: state.firestore.ordered.campaigns, // ordered is just a required keyword for pulling from firestore
    auth: state.firebase.auth
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'campaigns' }
  ])
)(Dashboard)
