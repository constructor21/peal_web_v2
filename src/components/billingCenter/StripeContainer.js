import React, { Component } from 'react';

import MyStripeBilling from './MyStripeBilling';

class StripeContainer extends Component {

  // TODO: add validation to make sure the save button was clicked 
  continue = e => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    return (

      <div>

        <div className="container">

          <form className="white">

            <MyStripeBilling />

            <div className="input-field">
              <button className="btn pink lighten-1" onClick={this.back}> Back </button>
              <span> | </span>
              <button className="btn pink lighten-1" onClick={this.continue}> Continue </button>
            </div>

            <div className="input-field">

            </div>

          </form>

        </div>



      </div>
    )
  }

}

export default StripeContainer;
