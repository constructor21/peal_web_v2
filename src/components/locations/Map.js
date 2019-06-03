import React, { Component } from 'react';
import { withGoogleMap, GoogleMap } from 'react-google-maps';

import './Map.css';

class Map extends Component {

  constructor(props){
    super(props);

    this.state = {
    };

  }

  /*

  Locations game plan

      (install the package [after doing the research to see if that's the best one to go with])
      (add the locations tab to the dashboard)



      *If user hasn't entered billing info then show a message asking them to do so
      *If they have then pull their company address from the redux store
      *create a function that turns an address into longitude and latidute so it centers the map on it and place
        a custom 'you' marker
      *have a marker for every display in their city


      Google search & YouTube search:
        google maps place marker on address javascript
        react place marker on google map
        pop up click event on google maps marker javascript
        pop up click event on google maps marker react
        custom google maps markers javascript
        custom google maps markers react
        loading marker locations from firebase google maps react
        loading marker locations from firebase google maps javascript

  */


  render() {

    const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
          defaultCenter = { { lat: 40.756795, lng: -73.954298 } }
          defaultZoom = { 13 }
        >
        </GoogleMap>
     ));


    return (

        <div>

          <h1 className="centerTitle"> Click on a display marker to see more information </h1>

          <div className="setMapPosition">
            <GoogleMapExample
              containerElement={ <div style={{ height: `550px`, width: '900px' }} /> }
              mapElement={ <div style={{ height: `100%` }} /> }
            />
          </div>

        </div>


    );
  }


}

export default Map;

/*
npm install react-google-maps
First up we are importing ‘withGoogleMap’ (a Higher Order Component) and ‘GoogleMap’
(which is going to take in map props) from ‘react-google-maps’.
Then we are creating a constant that uses both of the things we imported.
We need to pass in two props into ‘GoogleMap’ to get the component to work and those are
‘defaultCenter’ and ‘defaultZoom’.
You need to provide a latitude and longitude in the form of an object to defaultCenter,
and then some number into defaultZoom.
Next we return the const we just created in a div that takes in props of ‘containerElement’ and ‘mapElement’.
The container element is going to hold our map element. You can set the height and width of the container
to anything you want. You can set a fixed pixel size, or make it according to viewport height,
or as a percentage of the screen too. I chose 500px by 500px for this example.
For the map element, I wanted to fill the container, so I went with 100%.
*/
