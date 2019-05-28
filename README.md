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

Helpful stripe videos:
https://www.youtube.com/watch?v=dEahSdI7p7M
https://www.youtube.com/watch?v=rFmZtobVB1k
https://www.youtube.com/watch?v=lkA4rmo7W6k
https://www.youtube.com/watch?v=QT3_zT97_1g

Links:
https://jsfiddle.net/ywain/k288pxqa/


1. Save media content to redux store [figure out the progress bar and video difference]
2. Save dates to redux store [be able to delete the dates as well]
3. When you click the create campaign button add the media content and date to the campaign as well as title
4. Complete stripe integration and billing manager flow




5. Order the campaigns
6. Cloud function to take the company address and have a spot on the map for it auto-zoomed into
7. Locations tab --> google maps ... metrics dashboard that populates different info based on display marker clicked
    - guard the route
    - Metrics:
      Number of displays up
      Estimated reach
      Remaining length of current campaigns


8. Make the repo private
9. Add security rules
10. Host the website
11. Data architecture
