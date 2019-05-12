import React, { Component } from 'react';
import CampaignList from '../campaigns/CampaignList';
import Metrics from './Metrics';
import { connect } from 'react-redux'

// 12 colums on small sized screens, 6 colums on medium sized sceens

class Dashboard extends Component {

  render() {

    // console.log(this.props);
    const { campaigns } = this.props;

    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <CampaignList campaigns={campaigns} />
          </div>
          <div className="col s12 m5 offset-m1">
            <Metrics />
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
    campaigns: state.campaign.campaigns
  }
}

export default connect(mapStateToProps)(Dashboard)
