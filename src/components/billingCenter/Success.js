
import React, { Component } from 'react';
import './Success.css';

import { StripeProvider, Elements } from 'react-stripe-elements';
import CardForm from './MyStoreCheckout'

import CancelSubscription from './CancelSubscription'
import DeletePaymentSource from './DeletePaymentSource'

class Success extends Component {

  render() {
    return (
      <div className="container">

        <h3> Your Peal Wallet </h3>
        <p> An overview of your payment methods, settings and subscriptions with Peal. </p>


        {/* TODO: This needs to be a dynamically built list */}


        <form action="#" className="white" id="bottom-padding-override">
           <h6> Your Credit and Debit Cards: </h6>
           <p>

            <div className='keepInRow'>
               <label>
                 <input name="group1" type="radio" />
                 <span>**** **** **** 1234</span>
               </label>
               <div className="createSpace">
                <DeletePaymentSource />
               </div>
           </div>

           </p>
           <p>

           <div className='keepInRow'>
               <label>
                 <input name="group1" type="radio" />
                 <span>**** **** **** 8923</span>
               </label>
               <div className="createSpace">
                <DeletePaymentSource />
               </div>
            </div>

           </p>
           <p>

            <div className='keepInRow'>
               <label>
                 <input name="group1" type="radio"  />
                 <span>**** **** **** 0932</span>
               </label>
               <div className="createSpace">
                <DeletePaymentSource />
               </div>
             </div>


           </p>

           {/* Literally just using this to create space because you can't override materialize css spacing */}
           <div class="row">
           <div class="input-field col s12">
             <label></label>
           </div>
           </div>

           <h6> Your Subscription Tier:  </h6>


           <div className='keepInRow'>
             <p> $98 / month </p>
             <div className="createSpace">
               { /* <CancelSubscription /> */ }
             </div>
           </div>

           {/* Literally just using this to create space because you can't override materialize css spacing */}
           <div class="row">
           <div class="input-field col s12">
             <label></label>
           </div>
           </div>

           <h6> Your Business Location:  </h6>

           {/* TODO: Pull Location data from the firebase location info array */}


          </form>


        <form action="#" className="white">

          <h6> Business Address Change?  </h6>
          <p> Contact us at hello@pealdisplay.com to notify us if you are changing locations. </p>

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
