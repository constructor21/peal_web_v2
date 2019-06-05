import React from 'react'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

import { deleteCampaign } from '../../store/actions/campaignActions'

import { Redirect } from 'react-router-dom'

import moment from 'moment'

import DeleteCampaign from './DeleteCampaign'

import './CampaignDetails.css'


function calculateDiff(startYear, startMonth, startDay, endYear, endMonth, endDay) {
  console.log("hello");
  var begin = new Date(startYear, startMonth, startDay);
  console.log(begin);
  // Wed Jul 17 2019 00:00:00 GMT-0700 (Pacific Daylight Time)
  var end = new Date(endYear, endMonth, endDay);
  console.log(end);

  var timeDiff = Math.abs(end.getTime() - begin.getTime());
  var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));

  console.log(diffDays);
  var result = diffDays.toString() + " days";
  // console.log(result);
  return result;
}

const CampaignDetails = (props) => {
  // console.log(props);
  // const id = props.match.params.id;
  const { campaign, auth } = props;
  // it may take some time for this to load which is why you have the else statement

  if (!auth.uid) return <Redirect to='/' />


  if (campaign) {

    console.log("*****") // ["2019-06-17", "2019-06-29"] // year, month, day

    var startDate = campaign.campaignLength.day[0]
    var endDate = campaign.campaignLength.day[1]

    var startYear = startDate.substring(0,4);
    var startMonth = startDate.substring(5,7);
    var startDay = startDate.substring(8,10);
    var endYear = endDate.substring(0,4);
    var endMonth = endDate.substring(5,7);
    var endDay =  endDate.substring(8,10);

    var result = calculateDiff(startYear, startMonth, startDay, endYear, endMonth, endDay);

    console.log("*****")

    return (

      <div className="container section project-details">
        <div className="card z-depth-0">

          <div className="card-content">
            <span className="card-title">{campaign.title}</span>
          </div>


          <div className="card-action grey lighten-4 grey-text">
            <p> Created:
              <div>{moment(campaign.createdAt.toDate()).calendar()}</div>
            </p>
            <p className="grey-text"> Time Remaining:
              <div> {result} </div>
            </p>

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
