import React, {Component} from 'react'

import './MetricsPanel.css';
import ImageDisplay from './ImageDisplay';

/*
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
*/

// height grows dynamically, can't be set with css

class MetricsPanel extends Component {
  render() {
    return (
      <div className="metrics-panel-container">
        <div className="section">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">Display Metrics</span>
              <ul>
                <li>test data [Neighborhood description]</li>
                <li>test data [Estimated Food Traffic]</li>
              </ul>
              <ImageDisplay />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default MetricsPanel
