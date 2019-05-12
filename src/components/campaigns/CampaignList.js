import React from 'react'
import CampaignSummary from './CampaignSummary';

// window -> task manager -> you can see if cpu exponentially increasing which means a memory leak is likely occuring

// putting campaigns before the && means only do the following actions if a campaign exists

const CampaignList = ({campaigns}) => {
  return (
    <div className="project-list section">
      { campaigns && campaigns.map(campaign => {
        return (
          <CampaignSummary campaign={campaign} key={campaign.id} />
        )
      })}
    </div>
  )
}

export default CampaignList;
