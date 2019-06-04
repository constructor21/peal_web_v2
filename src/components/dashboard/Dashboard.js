import React, { Component } from 'react';
import CampaignList from '../campaigns/CampaignList';
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
    console.log({campaigns}.campaigns); // you can't take the length property because request to firestore takes time
    // TODO: only place welcome message if campaigns empty

    return (
      <div className="dashboard container">
        <div>
          <h5> Welcome. </h5>
          <h5> Make sure you're billing information is up to date and then click the create campaign tab to get started reaching more potential customers. </h5>
        </div>
        <div className="row">
          <div className="col s12 m6">
            <CampaignList campaigns={campaigns} />
          </div>
          <div className="col s12 m5 offset-m1">
          </div>
        </div>
      </div>
    )
  }
}

// mapStateToProps is this function always by convention
const mapStateToProps = (state) => {
  // accessing the state of the redux store
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
    { collection: 'campaigns', orderBy: ['createdAt', 'desc'] }
  ])
)(Dashboard)
