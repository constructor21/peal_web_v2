import React, { Component } from 'react';
import CampaignList from '../campaigns/CampaignList';
import Metrics from './Metrics';

// 12 colums on small sized screens, 6 colums on medium sized sceens

class Dashboard extends Component {
  render() {
    return (
      <div className="dashboard container">
        <div className="row">
          <div className="col s12 m6">
            <CampaignList />
          </div>
          <div className="col s12 m5 offset-m1">
            <Metrics />
          </div>
        </div>
      </div>
    )
  }
}

export default Dashboard;
