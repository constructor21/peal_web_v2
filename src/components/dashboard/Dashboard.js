import React, { Component } from 'react';
import CampaignList from '../campaigns/CampaignList';
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase' // connects a component to a firestore collection
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'

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


    return (
      <div>

        <div className="welcomeMessageToggle">
          <h5> Welcome. </h5>
          <h5> Get started by adding your billing information and then click the create campaign tab to begin reaching more potential customers. </h5>
        </div>

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

    /*
      This causes a screen flicker
          TODO: study conditional rendering
              http://www.react.express/conditional_rendering
              https://itnext.io/the-amazing-render-props-pattern-for-react-js-lifecycle-begone-14e520fc3821
              https://joshblog.net/2018/conditional-rendering-with-react-and-jsx/
              https://blog.logrocket.com/conditional-rendering-in-react-c6b0e5af381e/
              https://developmentarc.gitbooks.io/react-indepth/content/patterns/rendering_different_content.html

    if({campaigns}.campaigns) {
      console.log("campaigns exist!");
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
      console.log("no campaigns exist!");
      return (
        <div>

          <div className="welcomeMessageToggle">
            <h5> Welcome. </h5>
            <h5> Get started by adding your billing information and then click the create campaign tab to begin reaching more potential customers. </h5>
          </div>

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
    */

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
