
/*

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
or as a percentage of the screen too.
For the map element, I wanted to fill the container, so I went with 100%.

*/


/*

Locations game plan

    *If user hasn't entered billing info then show a message asking them to do so
    *If they have then pull their company address from the redux store
    *create a function that turns an address into longitude and latidute so it centers the map on it and place
      a custom 'you' marker
    *have a marker for every display in their city


    see if this is useful --> https://developers.google.com/maps/documentation/javascript/firebase

    the plug --> https://github.com/leighhalliday/google-maps-react-demo/blob/master/src/App.js

*/



import React, { Component, useState, useEffect } from 'react';
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import {
  withGoogleMap,
  withScriptjs,
  GoogleMap,
  Marker,
  InfoWindow
} from "react-google-maps";

import './Map.css';

import MetricsPanel from './MetricsPanel';


// TODO: loop through an array of locations to place all the markers on the map, a unique key is required
    // TODO: Create your own JSON file of existing Peal Displays
    /*
      For the 'you are here' marker... just place that, don't have it come from an array.
      Add that field manually for a user in firebase. Use the Peal Logo for that one instead of a standard marker
    */
function ReactMap() {

  // this is the state
  const [selectedDisplay, setSelectedDisplay] = useState(null);
          // ^value          ^setter                      ^initial value is null

  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter = { { lat: 37.774929, lng: -122.419416 } }
    >

    <Marker
      position={{
        lat: 37.774929,
        lng: -122.419416
      }}
      onClick={() => {
        console.log("hi from peal!");
      }}
    />

    {/*conditional rendering logic to only show an info window if you clicked on a display*/}
    {selectedDisplay && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedDisplay(null);
          }}
          position={{
            lat: 37.774929,
            lng: -122.419416
          }}
        >
        </InfoWindow>
      )}

    </GoogleMap>
  );

}

const MapWrapped = withScriptjs(withGoogleMap(ReactMap));

// need a class for Redux to work & hold state... call this function in the class??
// TODO: make a .env.local file to hold the api key
export default function Map() {
  return (
   <div style={{ width: "100vw", height: "100vh" }}>
     <MapWrapped
       googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCBggHcthnSSx33LABZX6DsNb1xrNxXd40&callback=initMap`}
       loadingElement={ <div style={{ height: `400px`, width: '800px' }} /> }
       containerElement={ <div style={{ height: `400px`, width: '800px' }} /> }
       mapElement={<div style={{ height: `100%` }} />}
     />
   </div>
 );
}

/*
class Map extends Component {

  constructor(props){
    super(props);

    this.state = {

      currentLocation: {
        lat: 0,
        lng: 0
      }

    };

  }

  render() {

    const { auth } = this.props;
    if (!auth.uid) return <Redirect to='/' />

    const GoogleMapExample = withGoogleMap(props => (
        <GoogleMap
          defaultCenter = { { lat: 37.774929, lng: -122.419416 } }
          defaultZoom = { 13 }
        >
        </GoogleMap>
     ));

    return (

        <div>

          <h5 className="centerTitle"> Click on a display marker to see more information </h5>


          <MetricsPanel />


          <div className="setMapPosition" id="map-box">
            <GoogleMapExample
              containerElement={ <div style={{ height: `400px`, width: '800px' }} /> }
              mapElement={ <div style={{ height: `100%` }} /> }
            />
          </div>

        </div>


    );
  }


}


const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Map);
*/
