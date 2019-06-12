
/*
The only reason we need server code at all is so that we can let it use our Secret Stripe API Key
to communicate securely with Stripe.
*/

/*
Put simply, it receives a Stipe Token from an HTTP request, and then passes that on to Stripe.
Then it handles the response from Stripe.

What’s a Token? It’s a unique string that Stripe generates to refer to a user’s sensitive credit information.
*/

const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);
const express = require('express');
const cors = require('cors')({origin: true});
// const app = express();
const app = require("express")();

// used env variables to hide secret key >> firebase functions:config:set stripe.token="sk_live_1uVHS5zVSOSKQ8pdtRm6MO5n"
  // recovered via -> firebase.config().stripe.token
const stripe = require('stripe')(functions.config().stripe.token);

// const stripe = require("stripe")("sk_live_1uVHS5zVSOSKQ8pdtRm6MO5n");

app.use(require("body-parser").text());


/*

In order to make this HTTP request from our front-end, I’ve created a function called charge using the Fetch API.
It’s just a simple POST request with the Token and charge details attached.

*/

app.post("/charge", async (req, res) => {
  try {
    let {status} = await stripe.charges.create({
      amount: 9800,
      currency: "usd",
      description: "An example charge",
      source: req.body
    });

    res.json({status});
  } catch (err) {
    res.status(500).end();
  }
});



app.listen(9000, () => console.log("Listening on port 9000"));
