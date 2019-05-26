// UserForm Equivilant

import React, { Component } from 'react';
import BusinessDetails from './BusinessDetails';
import StripeContainer from './StripeContainer';
import Confirm from './Confirm';

class BillingContainer extends Component {

  state = {
    step: 1,
    address: '',
    city: '',
    zipCode: ''
  };

  // Proceed to next step
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };

  // Go back to prev step
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };

  // Handle fields change
  handleChange = input => e => {
    this.setState({ [input]: e.target.value });
  };


  render() {

    const { step } = this.state;

    const { address, city, zipCode } = this.state;
    const values = { address, city, zipCode };



      switch (step) {
        case 1:
          return (
            <BusinessDetails
              nextStep={this.nextStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 2:
          return (
            <StripeContainer
              nextStep={this.nextStep}
              prevStep={this.prevStep}
              handleChange={this.handleChange}
              values={values}
            />
          );
        case 3:
        return (
          <Confirm
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            values={values}
          />
        );
        case 4:
          return (
            <h3> Success </h3>
          )
      }



  }

}

export default BillingContainer;
