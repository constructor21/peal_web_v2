import React, { Component } from 'react';
import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements';

class CardForm extends Component {

  constructor(props) {
      super(props);

      this.state = {

      }
  }

  render() {
    return (
      <div>
        <h5> This is where the card form will go </h5>
      </div>
    )
  }

}

export default injectStripe(CardForm);
