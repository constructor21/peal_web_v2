import React from 'react'

import './MetricsPanel.css';

const MetricsPanel = (props) => {
  return (
    <div className="metrics-panel-container">
      <div className="section">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">Display Metrics</span>
            <ul className="online-users">
              <li>test data [location name]</li>
              <li>test data [business type]</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MetricsPanel
