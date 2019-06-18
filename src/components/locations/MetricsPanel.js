import React, {Component} from 'react'

import './MetricsPanel.css';
import ImageDisplay from './ImageDisplay';

// height grows dynamically, can't be set with css

// TODO: Foot traffic for Au Coquelet is 5k per week, 20k per month 

class MetricsPanel extends Component {
  render() {
    return (
      <div className="metrics-panel-container">
        <div className="section">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">Display Metrics</span>
              <ul>
                <li>coming soon: [neighborhood description]</li>
                <li>coming soon: [estimated foot traffic]</li>
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
