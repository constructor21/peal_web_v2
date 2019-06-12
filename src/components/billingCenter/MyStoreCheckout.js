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

/*

The CardElement includes inputs for all of the major card fields: the card number, the expiration date, and the CVC.

*/



class CardForm extends Component {

  constructor(props) {

      super(props);

      this.state = {
        complete: false
      }

      this.submit = this.submit.bind(this);
  }

  // clicking the Save button tokenizes the card information and sends it to your server
  async submit(ev) {
    ev.preventDefault();
    console.log("user click submitted");
    // The stripe prop is available inside the component due to the use of injectStripe
    let {token} = await this.props.stripe.createToken({name: "Name"});
    let response = await fetch("/charge", {
      method: "POST",
      headers: {"Content-Type": "text/plain"},
      body: token.id
    });

    if (response.ok) this.setState({complete: true});
  }

  render() {

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

export default injectStripe(CardForm);
