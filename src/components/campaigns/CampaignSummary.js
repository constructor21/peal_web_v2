import React from 'react'

const CampaignSummary = ({campaign}) => {
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{campaign.title}</span>
        <p className="grey-text">3rd September, 2am</p>
      </div>
    </div>
  )
}

export default CampaignSummary
