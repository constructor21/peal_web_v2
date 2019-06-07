import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';

// TODO: Save to redux store so you can still have the confirmation page 

export class BusinessDetails extends Component {

  state = {
    address: "",
    addressError: "",
    city: "",
    cityError: "",
    zipCode: "",
    zipCodeError: ""
  };

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
    console.log(this.state);
  };

  validate = () => {

    console.log("validate method called");

    let isError = false;

    const errors = {
      addressError: "",
      cityError: "",
      zipCodeError: ""
    };

    if (this.state.address.length == 0) {
      isError = true;
      errors.address = "The 'Address' field can't be left empty";
    }

    if (this.state.city.length == 0) {
      isError = true;
      errors.city = "The 'City' field can't be left empty";
    }

    if (this.state.zipCode.length == 0) {
      isError = true;
      errors.zipCode = "The 'Zip Code' field can't be left empty";
    }

    this.setState({
      addressError: errors.address,
      cityError: errors.city,
      zipCodeError: errors.zipCode
    });

    return isError;
  };

  continue = e => {
    e.preventDefault();
    // form validation right here
    const err = this.validate();

    // if there are no errors
    if (!err) {

      // clear form
      this.setState({
        address: "",
        addressError: "",
        city: "",
        cityError: "",
        zipCode: "",
        zipCodeError: ""
      });

      // continue on to the next step
      this.props.nextStep();
    } else {
      console.log("there's an error!")
    }


  };


  render() {
    const { values, handleChange } = this.props;
    return (

          <div className="container">

            <form className="white">

              <h6> Address </h6>
              <TextField
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
              />
              <FormHelperText id="component-error-text">{this.state.addressError}</FormHelperText>

              {/* Literally just using this to create space because you can't override materialize css spacing */}
              <div class="row">
              <div class="input-field col s12">
                <label></label>
              </div>
              </div>

              <h6> City </h6>
              <TextField
                name="city"
                value={this.state.city}
                onChange={this.handleChange}
              />
              <FormHelperText id="component-error-text" className="errorText">{this.state.cityError}</FormHelperText>

              {/* Literally just using this to create space because you can't override materialize css spacing */}
              <div class="row">
              <div class="input-field col s12">
                <label></label>
              </div>
              </div>

              <h6> Zip Code </h6>
              <TextField
                name="zipCode"
                value={this.state.zipCode}
                onChange={this.handleChange}
              />
              <FormHelperText id="component-error-text">{this.state.zipCodeError}</FormHelperText>

              {
              /*
              <span class="helper-text">Helper text</span>
              */
              }

              <div className="input-field">
                <button className="btn pink lighten-1" onClick={this.continue}> Continue </button>
              </div>

            </form>

          </div>

    );
  }
}


export default BusinessDetails;
