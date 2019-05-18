npm install --> npm start

React specific ui framework:  (Not yet installed)
npm install @material-ui/core

Materialize CSS
-responsive CSS framework
-based on materialize design concepts by Google

Helpful debugging links:
https://stackoverflow.com/questions/53872757/react-redux-v6-a-v3-version-of-react-redux-firebase-is-required

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



TODO:
Check if you keep adding campaigns will the footer dynamically get pushed down the page ... it's not. Fix it
Get the validation sigin code from Peal_Web v1
If there are no campaigns created then have a header that prompts user to click the create campaign button
Figure out how to make the footer a lower height but still dynamic (not a fixed px height)
Guard the locations route as well -> just have a coming soon block in there
Add all of the gesalt components into the create campaign flow
Get a nicer signin form from the internet ... doesn't need to be materializecss just needs to be dynamic
Make the repo private
Create a dev branch, master branch and google maps branch
Have Aaron fork the repo
Make the web icon logo the peal logo (favicon.ico)
Make the legal stuff all / blah / blah after the company name on the very bottom like outfront does
Put the notifications panel from the tutorial in the locations tab
Use the other materialize tutorial list to make the legal pages super slick


SignIn / SignOut game plan

video 31 ->
  important

After this move onto adding the gesalt stuff into create campaign
