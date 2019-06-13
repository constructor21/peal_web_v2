
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


      pop up click event on google maps marker javascript
        https://developers.google.com/maps/documentation/javascript/examples/event-simple
        https://developers.google.com/maps/documentation/javascript/examples/infowindow-simple
      pop up click event on google maps marker react
        https://stackoverflow.com/questions/51972661/how-to-apply-click-method-on-google-maps-markers-react-google-maps
      custom google maps markers javascript
        https://www.webucator.com/how-to/how-add-custom-icon-google-map.cfm
        https://developers.google.com/maps/documentation/javascript/custom-markers
        https://developers.google.com/maps/documentation/javascript/examples/marker-symbol-custom
        https://stackoverflow.com/questions/10376617/how-do-you-create-a-marker-with-a-custom-icon-for-google-maps-api-v3
      heatmap
        https://developers.google.com/maps/documentation/javascript/earthquakes
        https://developers.google.com/maps/documentation/javascript/firebase

*/



import React, { Component } from 'react';
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


function ReactMap() {
  return (
    <GoogleMap
      defaultZoom={10}
      defaultCenter = { { lat: 37.774929, lng: -122.419416 } }
    />
  );

}

const MapWrapped = withScriptjs(withGoogleMap(ReactMap));

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
