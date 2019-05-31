npm install --> npm start

React specific ui framework:

npm install @material-ui/core
npm install @material-ui/icons


npm i gestalt --save
npm install styled-components --save


npm i react-file-drop

npm i typescript

npm install --save react-stripe-elements @types/react-stripe-elements stripe @types/stripe


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



Tasks


Where is his stripe backend? --> assumed used Node, did you use Express as middleware?
No checkout
Are you charging that card something or just saving the data?




1. Figure out a way to map store content to the specific campaign

      Need to save it to redux so you can do the same when dragging [only works from upload btn right now]

3. Complete stripe integration and billing manager flow


Cloud function to get the doc id and run through the list of all media files and replace their names??
OR
Just have a .then promise to do so at the point of campaign creation



4. Make the repo private
5. Add security rules
6. Host the website




Fix post-launch + all the TODOs

Footer is messed up again ....
    ... delete the old calendar code
Order the campaigns post launch as well

Cloud function to take the company address and have a spot on the map for it auto-zoomed into

Locations tab --> google maps ... metrics dashboard that populates different info based on display marker clicked
    - guard the route
    - Metrics:
      Number of displays up
      Estimated reach
      Remaining length of current campaigns

Explore proper data architecture post-launch

Validation that every field is filled out when press create campaign

When you click the create campaign button delete all media aside from the last one uploaded to handle prev refreshes?
  Or make an undo button??

Add a cancel subscription botton in the billing center --> if they want to cancel have a pop up that says don't cancel, 50% off for the next two months
