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

TODO:
Check if you keep adding campaigns will the footer dynamically get pushed down the page
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


SignIn / SignOut game plan

video 25 ...
  You can create a signOut link component and just have nothing in the navbar aside from the logo (no links)
  This means the signin page still has the header and footer

  Video 27 takes care of this:
    Make the '/' route the signin page
    When you signin push to the dashboard route
    When you logout push to the signin page route

video 26 ...
  The reason the flash happens is because the dom renders before firebase runs to see if we are logged in or not
  This shows you how to fix that


video 28 ->
  Bring the signup functionality into the signin process.
  You are creating users manually but the firestore collection part can still be done by code
  There should be a way in firebase to see if the username & password already exists and get that id from the res object
  If there is no res object simply pull the id using desturing and then create a firestore doc using it
  peep the signup athorError .message property. Do research on that and incorporate error handling

video 29 ->
  Don't make a first name / last name / initials thing but still follow the steps so you can have access to the profile key

video 30 ->
  important

video 31 ->
  important

After this move onto adding the gesalt stuff into create campaign
