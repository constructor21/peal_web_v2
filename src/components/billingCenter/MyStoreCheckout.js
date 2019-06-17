// https://stripe.com/docs/api/payment_methods/create

import React from 'react';
import {injectStripe} from 'react-stripe-elements';

import CardSection from './CardSection';

class CardForm extends React.Component {

  handleSubmit = (ev) => {
    // We don't want to let default form submission happen here, which would refresh the page.
    ev.preventDefault();


    this.props.stripe.products.create({
      name: 'Advertising Fee',
      type: 'service1',
    });

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
      product: 'prod_CbvTFuXWh7BPJH',
      nickname: 'Bronze',
      currency: 'usd',
      interval: 'month',
      amount: 10000,
    });

    // $98
    this.props.stripe.plans.create({
      product: 'prod_CbvTFuXWh7BPJH',
      nickname: 'SaaS Platform USD',
      currency: 'usd',
      interval: 'month',
      amount: 10000,
    });

    // $200
    this.props.stripe.plans.create({
      product: 'prod_CbvTFuXWh7BPJH',
      nickname: 'SaaS Platform USD',
      currency: 'usd',
      interval: 'month',
      amount: 10000,
    });


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





/*

import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'

import { addStripeToken } from '../../store/actions/stripeActions'
import { createStripeCharge } from '../../store/actions/stripeActions'

import { CardElement, injectStripe, ReactStripeElements } from 'react-stripe-elements';

import './MyStripeBilling.css'

import { Box } from 'gestalt';
import 'gestalt/dist/gestalt.css';

import styled from "styled-components";


const Block = styled.div`
    display: inline-block;
    vertical-align: center;
`;

const handleBlur = () => {
    console.log('[blur]');
};
const handleChange = (change) => {
    console.log('[change]', change);
};
const handleClick = () => {
    console.log('[click]');
};
const handleFocus = () => {
    console.log('[focus]');
};
const handleReady = () => {
    console.log('[ready]');
};

const createOptions = (fontSize, padding) => {
    return {
        style: {
            base: {
                fontSize,
                color: '#424770',
                letterSpacing: '0.025em',
                fontFamily: 'Source Code Pro, monospace',
                '::placeholder': {
                    color: '#aab7c4',
                },
            },
            invalid: {
                color: '#9e2146',
            },
        },
    };
};


// The CardElement includes inputs for all of the major card fields: the card number, the expiration date, and the CVC.




class CardForm extends Component {

  constructor(props) {

      super(props);

      this.state = {
        complete: false,
        userAuthID: this.props.auth.uid
        // TypeError: Cannot read property 'uid' of undefined -> when have in 'currentUser'
        // TypeError: this.props.auth is not a function -> when try firebase.auth().currentUser.uid
      }

      this.submit = this.submit.bind(this);
  }

  // clicking the Save button tokenizes the card information and sends it to your server
  async submit(ev) {

    ev.preventDefault();
    console.log("user click submitted");
    // The stripe prop is available inside the component due to the use of injectStripe

    if (this.props.stripe) {
        console.log("we're in business");


        var card_id = ''

        this.props.stripe
                .createToken()
                .then((payload) => {
                    console.log('[token]', payload);
                    this.props.addStripeToken(this.state.userAuthID, payload.token.id);
                    return payload;
                }).then((payload) => {
                    console.log('[passed token]', payload);
                    console.log('card id is...', payload.token.card.id)
                    console.log('last 4 digits are...', payload.token.card.last4)
                    // this.props.createStripeCharge(this.state.userAuthID, payload.token.card.id)
                });

      } else {
          console.log("Stripe.js hasn't loaded yet.");
      }
  }

  render() {

    const { auth } = this.props;

    if (this.state.complete) return <h1>Card Information Saved</h1>;

    return (

      <div>

        <Box alignItems="center" >

                <Block>
                    <form onSubmit={this.handleSubmit} className="stripeForm bottom-padding-override">
                        <label className="stripeLabel">
                            Credit Card Details
                            <CardElement
                                onBlur={handleBlur}
                                onChange={handleChange}
                                onFocus={handleFocus}
                                onReady={handleReady}
                                {...createOptions(this.props.fontSize)}
                            />
                        </label>
                    </form>
                  </Block>
        </Box>

        <Box>

            <Block>
              <button className="stripeButton" onClick={this.submit}> Save </button>
            </Block>
        </Box>


      </div>


    )
  }

}

const mapStateToProps = (state) => {

  return {
    auth: state.firebase.auth,
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    addStripeToken: (authId, token) => dispatch(addStripeToken(authId, token)),
    createStripeCharge: (authId, card) => dispatch(createStripeCharge(authId, card))
  }
}


export default injectStripe(connect(mapStateToProps, mapDispatchToProps)(CardForm));

*/
