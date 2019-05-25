import React, { Component } from 'react';

export class BusinessDetails extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();

  };

  render() {
    const { values, handleChange } = this.props;
    return (

          <div className="container">

            <form className="#e0e0e0 grey lighten-2">

              <div className="input-field">
                <h6> Address </h6>
                <input id='title' onChange={handleChange('address')} />
                <label htmlFor="title">{values.address}</label>
              </div>

              <div className="input-field">
                <h6> City </h6>
                <input id='title' onChange={handleChange('city')} />
                <label htmlFor="title">{values.city}</label>
              </div>

              <div className="input-field">
                <h6> Zip Code </h6>
                <input id='title' onChange={handleChange('zipCode')} />
                <label htmlFor="title">{values.zipCode}</label>
              </div>

              <div className="input-field">
                <button className="btn pink lighten-1" onClick={this.continue}> Continue </button>
              </div>

            </form>

          </div>

    );
  }
}


export default BusinessDetails;
