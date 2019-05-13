import React from 'react'
import CampaignSummary from './CampaignSummary';
import { Link } from 'react-router-dom'

// window -> task manager -> you can see if cpu exponentially increasing which means a memory leak is likely occuring

// putting campaigns before the && means only do the following actions if a campaign exists

// everytime you click on a project you need to go to the details of that specific project
  // notice that where link to is pointing to is the same strucutre as what is in App.js

const CampaignList = ({campaigns}) => {
  return (
    <div className="project-list section">
      { campaigns && campaigns.map(campaign => {
        return (
          <Link to={'/campaign/' + campaign.id} key={campaign.id}>
            <CampaignSummary campaign={campaign} />
          </Link>
        )
      })}
    </div>
  )
}

export default CampaignList;
