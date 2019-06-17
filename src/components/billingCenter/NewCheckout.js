
import React from 'react';
import {injectStripe} from 'react-stripe-elements';

import CardSection from './CardSection';

class CardForm extends React.Component {

  handleSubmit = (ev) => {

    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();

    // Step 1: Define a service product and pricing plan

    this.props.stripe.products.create({
      name: 'Advertising Fee',
      type: 'service1',
    });

    /*
    this.props.stripe.products.create({
      name: 'Installation Fee',
      type: 'service2',
    });

    this.props.stripe.products.create({
      name: 'Closed Network Fee',
      type: 'service3',
    });

    // $45
    this.props.stripe.plans.create({
      product: 'test1',
      nickname: 'Bronze',
      currency: 'usd',
      interval: 'day',
      amount: 100,
    });
    */

    // $98
    this.props.stripe.plans.create({
      product: 'test2',
      nickname: 'Silver',
      currency: 'usd',
      interval: 'day',
      amount: 100,
    });


    /*
    // $200
    this.props.stripe.plans.create({
      product: 'test3',
      nickname: 'Gold',
      currency: 'usd',
      interval: 'day',
      amount: 100,
    });
    */


    // You can also use createToken to create tokens.
    // See our tokens documentation for more:
    // https://stripe.com/docs/stripe-js/reference#stripe-create-token
    this.props.stripe.createToken({type: 'card'}).then(({token}) => {
      console.log("token accepted")
      console.log(token);
    });



    // Within the context of `Elements`, this call to createPaymentMethod knows from which Element to
    // create the PaymentMethod, since there's only one in this group.
    // See our createPaymentMethod documentation for more:
    // https://stripe.com/docs/stripe-js/reference#stripe-create-payment-method
    /*
    this.props.stripe
      .createPaymentMethod('card', {billing_details: {name: 'Jenny Rosen'}})
      .then(({paymentMethod}) => {
        console.log('Received Stripe PaymentMethod:', paymentMethod);
      });
    */




    // You can also use handleCardPayment with the Payment Intents API automatic confirmation flow.
    // See our handleCardPayment documentation for more:
    // https://stripe.com/docs/stripe-js/reference#stripe-handle-card-payment

    // this.props.stripe.handleCardPayment('{PAYMENT_INTENT_CLIENT_SECRET}', data);
        // data was providing an undefined error









    /*

    // You can also use createSource to create Sources.
    // See our Sources documentation for more:
    // https://stripe.com/docs/stripe-js/reference#stripe-create-source
    this.props.stripe.createSource({
      type: 'card',
      owner: {
        name: 'Jenny Rosen',
      },
    });

    */


  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <CardSection />
        <button>Confirm Peal Subscription</button>
      </form>
    );
  }
}

export default injectStripe(CardForm);
