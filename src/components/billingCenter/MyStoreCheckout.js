import React, { Component } from 'react';
import { connect } from 'react-redux'
import { compose } from 'redux'
import { addStripeToken } from '../../store/actions/stripeActions'

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

/*

The CardElement includes inputs for all of the major card fields: the card number, the expiration date, and the CVC.

*/



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
        console.log("we're in business"); // this runs

        // game plan: turn the firebase calls into actions


        this.props.stripe
                .createToken()
                .then((payload) => {
                    console.log('[token]', payload);
                    // this.props.firebase.firestore.collection('stripe_customers').doc(this.props.firebase.auth.currentUser.uid).collection('tokens').add({ token: payload.token.id });
                    this.props.addStripeToken(this.state.userAuthID, payload.token.id);
                    return payload;
                }).then((payload) => {
                    console.log('[passed token]', payload);
                });

        // promise

        // const charge = { amount: 2, source: "M0m3ZlvIxfnchNeg" }; -> this variable doesn't appear to be used anywhere

        //     this.props.firebase.firestore.collection('stripe_customers')
        //         .doc(this.props.firebase.auth.currentUser.uid)
        //         .collection('charges')
        //         .add({ amount: 100, source: "card_1EID7eEAFgdVOsNsb914GrcV" });

        // ^get rid of the hardcoding


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
    addStripeToken: (authId, token) => dispatch(addStripeToken(authId, token))
  }
}


/*
both the Redux HOC and the Stripe HOC want to configure things in the React context for the component,
however, whichever component is the outermost "wins".
Choice:
  injectStripe(connect()(YourComponent))
  or
  connect()(injectStripe(YourComponent))
If Redux's context is the "outer" HOC, then the Stripe-created HOC
will lose track of the <Elements> components registered with it.
*/


export default injectStripe(connect(mapStateToProps, mapDispatchToProps)(CardForm));
