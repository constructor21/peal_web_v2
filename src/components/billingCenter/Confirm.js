import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom'

import { connect } from 'react-redux'
import { saveLocationInfo } from '../../store/actions/billingActions'

import './Confirm.css';

class Confirm extends Component {

  state = {
    // locationInfo: [this.props.values.address, this.props.values.city, this.props.values.zipCode],
    locationInfo: [this.props.confirmStreet, this.props.confirmCity, this.props.confirmZipCode],
    confirmStreet: this.props.confirmStreet,
    confirmCity: this.props.confirmCity,
    confirmZipCode: this.props.confirmZipCode,
    confirmDigits: this.props.confirmDigits
  }

  confirm = (e) => {
    e.preventDefault();
    console.log("confirm button pressed");
    // PROCESS FORM in firestore right here //
    console.log("saved action to state");
    this.props.saveLocationInfo(this.state.locationInfo);
    console.log("store the location info in firstore");

  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {

    const { values: { address, city, zipCode } } = this.props;

    const { confirmStreet } = this.props;

    const { confirmCity } = this.props;

    const { confirmZipCode } = this.props;

    const { confirmDigits } = this.props;

    return (

      <div className="container top-padding">

        <ul class="collection">
          <li class="collection-item">{this.state.confirmStreet}</li>
          <li class="collection-item">{this.state.confirmCity}</li>
          <li class="collection-item">{this.state.confirmZipCode}</li>
          <li class="collection-item">{"**** **** ****"}{this.state.confirmDigits}</li>
        </ul>

        <form className="white">

          <div className="input-field">
            <button className="btn pink lighten-1" onClick={this.back}> Back </button>
            <span> | </span>
            <button className="btn pink lighten-1" onClick={this.confirm}> <NavLink to='/create'> Confirm </NavLink></button>
          </div>

          <div className="input-field">

          </div>

        </form>

      </div>

    );
  }
}

// This may be causing a conflict ... maybe you don't need this since you are setting the state yourself
  // notice the campaign title is not set this way in the createCampaign file!!!!
const mapStateToProps = (state) => {
  console.log("*****------");
  console.log(state.billing.locationInfo);
  console.log(state.stripePlug.street);
  console.log(state.stripePlug.city);
  console.log(state.stripePlug.zipCode);
  console.log(state.stripePlug.last4digits);
  console.log("*****------");
  return {
    locationInfo: state.billing.locationInfo,
    confirmStreet: state.stripePlug.street,
    confirmCity: state.stripePlug.city,
    confirmZipCode: state.stripePlug.zipCode,
    confirmDigits: state.stripePlug.last4digits
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // accepts an individual campaign that we are passing to the dispatch function an action creator
    saveLocationInfo: (locationInfo) => dispatch(saveLocationInfo(locationInfo))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Confirm);
