import React, { Component } from 'react';
import { StripeProvider, Elements } from 'react-stripe-elements';
import CardForm from './MyStoreCheckout'

class MyStripeBilling extends Component {

  constructor(props) {
      super(props);
      this.state = {
      };
    }

    // this is the public key. The secret one is saved in an env variable
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
