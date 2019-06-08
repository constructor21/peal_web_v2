import React, { Component } from 'react';

import './WelcomeMessage.css'

class WelcomeMessage extends Component {

  render() {

    return (
      <div className="welcomeMessageToggle">
        <h5> Welcome. </h5>
        <h5> Get started by adding your billing information and then click the create campaign tab to begin reaching more potential customers. </h5>
      </div>
    )
  }

}

export default WelcomeMessage;
