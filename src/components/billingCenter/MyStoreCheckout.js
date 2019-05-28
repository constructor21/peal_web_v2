import React, { Component } from 'react';
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

// You could put the back and continue button here?

// force user to nickname the card?

class CardForm extends Component {

  constructor(props) {
      super(props);

      this.state = {

      }
  }

  render() {
    return (
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
    )
  }

}

export default injectStripe(CardForm);
