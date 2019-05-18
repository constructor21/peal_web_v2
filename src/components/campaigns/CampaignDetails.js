import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import { Redirect } from 'react-router-dom'

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
            {
              /*
              <p>{campaign.content}</p>
              */
            }

          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>2nd September, 2am</div>
          </div>
        </div>
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

// connect and firestore connect are two higher order compoents. We are composing them together.
export default compose(
  connect(mapStateToProps),
  firestoreConnect([{
    collection: 'campaigns'
  }])
)(CampaignDetails)
