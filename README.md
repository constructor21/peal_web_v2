
npm install --> npm start

React specific ui framework:

npm install @material-ui/core
npm install @material-ui/icons


npm i gestalt --save
npm install styled-components --save


npm i react-file-drop

npm i typescript

npm install --save react-stripe-elements @types/react-stripe-elements stripe @types/stripe

sudo npm install -g firebase-tools

npm install react-google-maps


Materialize CSS
-responsive CSS framework
-based on materialize design concepts by Google

Helpful debugging links:

https://stackoverflow.com/questions/53872757/react-redux-v6-a-v3-version-of-react-redux-firebase-is-required

https://medium.freecodecamp.org/how-to-keep-your-footer-where-it-belongs-59c6aa05c59c

Common Errors:
If you get 'dispatch is not a function' error that likely means you are passing mapDispatchToProps as first argument instead of null or mapStateToProps

If you get underscore this.props. name of export default is not a funciton you likely didn't pass in mapDispatchToProps as second argument


Notes:

Images
-Unsplash
-Noun Project

testuser password: qqqqqqq  
q x7

firebase: auth: if uid is there it means you're logged in
  if isEmpty: true means not logged in

The reason the flash was happening is because the dom was rendering before firebase runs to see if we are logged in or not

Firesbase auth UID matches corresponding firestore doc ID

Rules are matches to specific code paths. You can different rules for different documents.
  Top line is for all of firebase which is good
  Second line is for this specific database which is good
  Beyond that is where you start editing for customization




  The only reason we need server code at all is so that we can let it use our Secret Stripe API Key
  to communicate securely with Stripe.

  Put simply, it receives a Stipe Token from an HTTP request, and then passes that on to Stripe.
  Then it handles the response from Stripe.

  What’s a Token? It’s a unique string that Stripe generates to refer to a user’s sensitive credit information.


  used env variables to hide secret key >> firebase functions:config:set stripe.token="sk_live_1uVHS5zVSOSKQ8pdtRm6MO5n"
                                                ^in the root directory
    recovered via -> firebase.config().stripe.token

    Test card -> 4242424242424242	Visa     .... will be declined if using live keys

    In order to make this HTTP request from our front-end, I’ve created a function called charge using the Fetch API.
    It’s just a simple POST request with the Token and charge details attached.


error TS7006: Parameter 'err' implicitly has an 'any' type.
solution: "noImplicitAny": false, in the the tsconfig.json


In functions folder
  npm install @google-cloud/logging
  npm i @types/stripe


  npm install stripe --save


firebase deploy --only functions



https://www.gps-coordinates.net/   for address to location converter







Stripe links
https://stripe.com/docs/recipes/elements-react
https://stripe.com/docs/testing
https://angularfirebase.com/lessons/stripe-recurring-subscription-payments-with-angular-and-firebase-cloud-functions/
https://www.youtube.com/watch?v=_lZc2O2oUJk
https://www.youtube.com/watch?v=NsPGRIVOg0U
https://angularfirebase.com/lessons/angular-stripe-payments-part-2-firebase-cloud-functions-backend/#Configuring-Stripe-with-Environment-Variables
https://alligator.io/react/payments-stripe-checkout-react/
https://www.robinwieruch.de/react-express-stripe-payment/
https://github.com/krohling/crash-course-react-redux-stripe








Tasks

Jean -> billing center front end
Aaron -> Stripe backend

Change delete method to match the creation logic

1. Make the repo private
2. Host the website


Fix post-launch + all the TODOs

Add a cancel subscription button in the billing center --> if they want to cancel have a pop up that says don't cancel, 50% off for the next two months ... button options [save money] [confirm cancelation]

Preview image or video [react drop zone &/or gestalt video uploader]
