import React, { Component } from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import CardForm from './MyStoreCheckout'

class MyStripeBilling extends Component {

  constructor(props) {
      super(props);
      this.state = {
      };
    }

    render() {
      return (
        <StripeProvider apiKey="pk_live_gFrLSXXasviFmiRkfRybWXAL">
          <Elements>
            <CardForm fontSize='14px' />
          </Elements>
        </StripeProvider>
      )
    }

}

export default MyStripeBilling;
