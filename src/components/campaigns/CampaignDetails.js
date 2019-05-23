import React from 'react'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import { deleteCampaign } from '../../store/actions/campaignActions'

import { Redirect } from 'react-router-dom'

import moment from 'moment'

import DeleteCampaign from './DeleteCampaign'

import './CampaignDetails.css'


const CampaignDetails = (props) => {
  // console.log(props);
  // const id = props.match.params.id;
  const { campaign, auth } = props;
  // it may take some time for this to load which is why you have the else statement

  if (!auth.uid) return <Redirect to='/' />


  if (campaign) {
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">

          <div className="card-content">
            <span className="card-title">{campaign.title}</span>
          </div>


          <div className="card-action grey lighten-4 grey-text">
            <div>{moment(campaign.createdAt.toDate()).calendar()}</div>
          </div>

        </div>

        {/*Pass the id of the specific document you want to delete*/}
        <DeleteCampaign documentId={campaign.firebaseAuthId} deleteCampaign={props.deleteCampaign} />


      </div>
    )
  } else {
    return (
      <div className="container center">
        <p>Loading project...</p>
      </div>
    )
  }

}


// props is not given by default in this function, we pass it in as the second parameter
  // data is a built-in key of the firestore object
  const mapStateToProps = (state, ownProps) => {
    // console.log(state);
    const id = ownProps.match.params.id;
    const campaigns = state.firestore.data.campaigns;
    const campaign = campaigns ? campaigns[id] : null
    return {
      campaign: campaign,
      auth: state.firebase.auth
    }
  }

  const mapDispatchToProps = (dispatch) => {
    return {
      // accepts an individual campaign that we are passing to the dispatch function an action creator
      deleteCampaign: (documentId) => dispatch(deleteCampaign(documentId))
    }
  }

// connect and firestore connect are two higher order compoents. We are composing them together.
export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect([{
    collection: 'campaigns'
  }])
)(CampaignDetails)
