
import React, { Component } from 'react';
import './Success.css';

import { StripeProvider, Elements } from 'react-stripe-elements';
import CardForm from './MyStoreCheckout'


// TODO: Find a way to give customers an option to delete a payment method

class Success extends Component {

  render() {
    return (
      <div className="container">

        <h3> Your Peal Wallet </h3>
        <p> An overview of your payment methods, settings and subscriptions with Peal. </p>


        <form action="#" className="white">
           <h6> Your Credit and Debit Cards: </h6>
           <p>
             <label>
               <input name="group1" type="radio" />
               <span>**** **** **** 1234</span>
             </label>
           </p>
           <p>
             <label>
               <input name="group1" type="radio" />
               <span>**** **** **** 8923</span>
             </label>
           </p>
           <p>
             <label>
               <input name="group1" type="radio"  />
               <span>**** **** **** 0932</span>
             </label>
           </p>

           {/* Literally just using this to create space because you can't override materialize css spacing */}
           <div class="row">
           <div class="input-field col s12">
             <label></label>
           </div>
           </div>

           <h6> Your Subscription Tier:  </h6>
           <p> $98 / mo </p>

           {/* Literally just using this to create space because you can't override materialize css spacing */}
           <div class="row">
           <div class="input-field col s12">
             <label></label>
           </div>
           </div>

           <h6> Add a new payment method: </h6>
           <StripeProvider apiKey="pk_test_yrK3Fgp6ueQ2Ah739L7tW3kn">
             <Elements>
               <CardForm fontSize='14px' />
             </Elements>
           </StripeProvider>

        </form>

      </div>
    );
  }
}

export default Success;
