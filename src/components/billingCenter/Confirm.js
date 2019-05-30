import React, { Component } from 'react';
import { Redirect, NavLink } from 'react-router-dom'

class Confirm extends Component {

  confirm = (e) => {
    e.preventDefault();
    console.log("confirm button pressed");
    // PROCESS FORM in firestore right here //
    console.log("saved action to state");
    console.log("store the location info in firstore");

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
            <button className="btn pink lighten-1" onClick={this.confirm}> <NavLink to='/create'> Confirm </NavLink></button>
          </div>

          <div className="input-field">

          </div>

        </form>

      </div>

    );
  }
}


export default Confirm;
