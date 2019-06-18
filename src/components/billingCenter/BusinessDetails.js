import React, { Component } from 'react';

import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import { connect } from 'react-redux'


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

      //save to redux

      console.log("save the billing address info here")
      // console.log(this.state.address);
      this.props.saveStreet(this.state.address)
      // console.log(this.state.city);
      this.props.saveCity(this.state.city);
      // console.log(this.state.zipCode);
      this.props.saveZipCode(this.state.zipCode);
      console.log("____________")

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

              <h6> Street </h6>
              <TextField
                name="address"
                value={this.state.address}
                onChange={this.handleChange}
              />
              <FormHelperText id="component-error-text">{this.state.addressError}</FormHelperText>

              {/* Literally just using this to create space because you can't override materialize css spacing */}
              <div className="row">
              <div className="input-field col s12">
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
              <div className="row">
              <div className="input-field col s12">
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

const mapStateToProps = (state) => {
  console.log("stripe value...")
  console.log(state.stripePlug)
  console.log("....")
  return {
    auth: state.firebase.auth
  }
}


const mapDispatchToProps = (dispatch) => {
  return {

    saveStreet: (value) => {
      dispatch({ type: 'SAVE_STREET', payload: value })
    },

    saveCity: (value) => {
      dispatch({ type: 'SAVE_CITY', payload: value })
    },

    saveZipCode: (value) => {
      dispatch({ type: 'SAVE_ZIP_CODE', payload: value })
    }


  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BusinessDetails)
