
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


  used env variables to hide secret key >> firebase functions:config:set stripe.token="sk_test_JtOjT7CwPuj7qfI9jPqVV1Lv"
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



Updating parent state from the child
  https://www.youtube.com/watch?v=AnRDdEz1FJc&t=2s
  https://medium.com/@kyledavelaar/updating-parent-component-state-from-children-components-in-react-2ead9b9cec9f

React DropZone
  https://react-dropzone.netlify.com/
  https://react-dropzone-uploader.js.org/
  https://medium.com/technoetics/handling-file-upload-in-reactjs-b9b95068f6b
  https://react-dropzone.js.org/#!/Accepting%20specific%20file%20types
  https://github.com/codingforentrepreneurs/Try-Reactjs/blob/master/src/learn/ImgDropAndCrop.js
  https://www.youtube.com/watch?v=aK3aUW08YGw&list=PLEsfXFp6DpzQbwYDx1zgcKJ4tzyWFaESK&index=25
  https://upmostly.com/tutorials/react-dropzone-file-uploads-react/
  https://malcoded.com/posts/react-dropzone/



Using TypeScript with React
  https://blog.bitsrc.io/why-and-how-use-typescript-in-your-react-app-60e8987be8de
  https://blog.logrocket.com/how-why-a-guide-to-using-typescript-with-react-fffb76c61614/
  https://alligator.io/react/typescript-with-react/

GraphQL with Firesbase

GraphQL vs. REST API



Stripe links
https://stripe.com/docs/billing/quickstart
https://stripe.com/docs/api/plans/create
https://stripe.com/docs/api/subscriptions/object
https://stripe.com/docs/api/service_products
https://stripe.com/docs/api/payment_methods/create
https://stripe.com/docs/api/sources/create
https://stripe.com/docs/api/payment_methods/create
https://stripe.com/docs/sources/customers
https://stripe.com/docs/api/sources/object


Functions can't make external API requests if you are not on a blaze plan



Tasks




Check the logging in metrics panel and image display
Make sure the dictionaries in both files didn't break the page
Check if the spacing between delete, cancel buttons and their content worked


Implement local storage approach to handle map clicking

Notes tutorial (looking up a different one will likely be needed)
-dynamic card adding and deleting
-pull last4 digits & location array from firestore







Jean -> billing center front end
Aaron -> Stripe backend

Change delete method to match the creation logic

1. Make the repo private
2. Host the website


Fix post-launch + all the TODOs

Add a cancel subscription button in the billing center --> if they want to cancel have a pop up that says don't cancel, 50% off for the next two months ... button options [save money] [confirm cancelation]
