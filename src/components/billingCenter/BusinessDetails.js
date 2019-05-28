import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';

// TODO: Find a clear way to create space
// TODO: Add validation to each field 

export class BusinessDetails extends Component {

  continue = e => {
    e.preventDefault();
    this.props.nextStep();

  };

  render() {
    const { values, handleChange } = this.props;
    return (

          <div className="container">

            <form className="white">

              <h6> Address </h6>
              <TextField
                onChange={handleChange('address')}
                defaultValue={values.address}
              />

              {/* Litterally just using this to create space because you can't override materialize css spacing */}
              <div class="row">
              <div class="input-field col s12">
                <label></label>
              </div>
              </div>

              <h6> City </h6>
              <TextField
                onChange={handleChange('city')}
                defaultValue={values.city}
              />

              {/* Litterally just using this to create space because you can't override materialize css spacing */}
              <div class="row">
              <div class="input-field col s12">
                <label></label>
              </div>
              </div>

              <h6> Zip Code </h6>
              <TextField
                onChange={handleChange('zipCode')}
                defaultValue={values.zipCode}
              />

              <div className="input-field">
                <button className="btn pink lighten-1" onClick={this.continue}> Continue </button>
              </div>

            </form>

          </div>

    );
  }
}


export default BusinessDetails;
