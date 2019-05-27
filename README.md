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



Fix all TODOs post-launch




Tasks

afternoon standup
  - added sidenav
  - welcome message
  - double text fixed

Where is his stripe backend? --> assumed used Node, did you use Express as middleware?
No checkout 
Are you charging that card something or just saving the data?



3. Save media content to firestore
4. Order the campaigns
5. Cloud function to take the company address and have a spot on the map for it auto-zoomed into
6. If a user hasn't entered entered anything into billing before then their needs to be a welcome message
7. Locations tab --> google maps ... metrics dashboard that populates different info based on display marker clicked
    - guard the route
    - Metrics:
      Number of displays up
      Estimated reach
      Remaining length of current campaigns
8. Fix calendar cell height [it's the cells not the box]
9. Add Stripe back, isolate the css --> have a better looking summary page
11. The success page should show the a panel for add, delete and change payment method
12. Remove the component when sucessful upload or gestalt video uploader or react drop zone ?
13. Make the repo private
14. Add security rules
15. Host the website
16. Data architecture
