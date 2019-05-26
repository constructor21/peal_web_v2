import React, { Component } from 'react';

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM in firestore right here //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { address, city, zipCode }
    } = this.props;
    return (

      <div className="container">

        <ul class="collection">
          <li class="collection-item">{address}</li>
          <li class="collection-item">{city}</li>
          <li class="collection-item">{zipCode}</li>
        </ul>

        <form className="white">

          <div className="input-field">
            <button className="btn pink lighten-1" onClick={this.back}> Back </button>
            <span> | </span>
            <button className="btn pink lighten-1" onClick={this.continue}> Confirm & Continue </button>
          </div>

          <div className="input-field">

          </div>

        </form>

      </div>

    );
  }
}


export default Confirm;
