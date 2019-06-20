import React, {Component} from 'react'

import './MetricsPanel.css';
import ImageDisplay from './ImageDisplay';


// height grows dynamically, can't be set with css


var defaultFootTraffic = "coming soon: [estimated foot traffic]"
var defaultNeighboorhoodDesciption = "coming soon: [neighborhood description]"

var auCoqueletFootTraffic = "5k customers per week"
var auCoqueletNeighboorhoodDesciption = "Central downtown location across the street from Berkeley campus"


// var gotItM = localStorage.getItem("localStorageVariableName")
// var selectedBusinessMetricsReceiver;

var metricsDictionary = {
  "Baiano Pizzeria": [defaultFootTraffic, defaultNeighboorhoodDesciption],
  "Au Coquelet": [auCoqueletFootTraffic, auCoqueletNeighboorhoodDesciption],
  "Proper Fashion": [defaultFootTraffic, defaultNeighboorhoodDesciption]
}

class MetricsPanel extends Component {

  render() {

    console.log("testing logging in metrics panel")
    console.log(this.props) // not dynamic ...
    console.log("end of metrics props")

    return (
      <div className="metrics-panel-container">
        <div className="section">
          <div className="card z-depth-0">
            <div className="card-content">
              <span className="card-title">Display Metrics</span>
              <ul>
                <li>{defaultNeighboorhoodDesciption}</li>
                <li> {defaultFootTraffic} </li>
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
