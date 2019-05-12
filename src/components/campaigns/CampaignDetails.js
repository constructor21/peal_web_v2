import React from 'react'

const CampaignDetails = (props) => {
  console.log(props);
  const id = props.match.params.id;
  return (
    <div className="container section project-details">
      <div className="card z-depth-0">
        <div className="card-content">
          <span className="card-title">Project title - { id }</span>
          <p>Blah Blah</p>
        </div>
        <div className="card-action grey lighten-4 grey-text">
          <div>2nd September, 2am</div>
        </div>
      </div>
    </div>
  )
}

export default CampaignDetails;
