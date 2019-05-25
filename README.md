npm install --> npm start

React specific ui framework:

npm install @material-ui/core
npm install @material-ui/icons


npm i gestalt --save
npm install styled-components --save


npm i react-file-drop


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



TODO:

Welcome message if no campaigns have been created yet

SideNav is sometimes not opening ... you can't trust Jquery ... use the old code to activate it but still keep material styling

Save media content to firestore (google)

Order the campaigns

Billing page + when they click 'create campaign if they haven't added card info then an error message needs to pop up'
  The billing address sends a cloud function so that when they sign in it shows them all the displays in their area on the locations tab
  <p> If they haven't entered info before it needs to have a welcome message </p>

Add calendar back
  convert material to materialize
  proper calculations based on subsciption model

Add Stripe Back
  isolate the css

The success page should be the notifications panel from the tutorial
  Need to be able to add, delete, change payments

Make the repo private
Add security rules
Host the website



Guard the locations route
Metrics Dashboard
