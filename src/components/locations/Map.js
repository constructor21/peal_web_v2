
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

import * as displayData from "../../data/peal-displays.json";


function ReactMap() {

  // this is the state
  const [selectedDisplay, setSelectedDisplay] = useState(null);
          // ^value          ^setter                      ^initial value is null

  /*
  useEffect(() => {
    console.log("use effect called") // happens on every button click!
    localStorage.setItem("localStorageVariableName", selectedBusinessNameSender)
    console.log(selectedBusinessNameSender) // still an empty string because issue updating global variable form a callback
    console.log("___")
  });
  */

  return (

    <GoogleMap
      defaultZoom={11}
      defaultCenter = { { lat: 37.8044, lng: -122.2711 } }
    >

    {displayData.displayInfo.map(display => (

      <Marker
        key={display.properties.DISPLAY_ID}
        position={{
          lat: display.geometry.coordinates[0],
          lng: display.geometry.coordinates[1]
        }}
        onClick={() => {
          console.log("hi from peal!");
          setSelectedDisplay(display);

          // dynamic upon button click
          var selectedBusinessNameSender = display.properties.BUSINESS_NAME
          console.log("clicked on....")
          console.log(selectedBusinessNameSender) // this isn't updating the global variable b/c in a callback
          console.log(".....")

          // fill up local storage with the proper data
          localStorage.setItem("localStorageVariableName", selectedBusinessNameSender)

          var currLocation = localStorage.getItem("localStorageVariableName")
          console.log("did this update?")
          console.log(currLocation) // Yes it does!
          console.log(".....")

          // delete whatever is currently is in local storage
          // localStorage.clear();


        }}
        icon={{
          url: `/Peal_Logo.png`,
          scaledSize: new window.google.maps.Size(25, 25)
        }}
      />

    ))}

    {selectedDisplay && (
        <InfoWindow
          onCloseClick={() => {
            setSelectedDisplay(null);
          }}
          position={{
            lat: selectedDisplay.geometry.coordinates[0],
            lng: selectedDisplay.geometry.coordinates[1]
          }}
        >

          <div>
            <p> {selectedDisplay.properties.DESCRIPTION} : {selectedDisplay.properties.BUSINESS_NAME} </p>
          </div>
        </InfoWindow>
      )}

    </GoogleMap>

  );

}

// TODO: route guarding

const MapWrapped = withScriptjs(withGoogleMap(ReactMap));



// TODO: make a .env.local file to hold the api key

export default function Map() {

  var currLocationToPass = localStorage.getItem("localStorageVariableName")

  return (
   <div>
    <MetricsPanel location={currLocationToPass} />
     <div className="setMapPosition"  id="map-box">
       <MapWrapped
         googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCBggHcthnSSx33LABZX6DsNb1xrNxXd40`}
         loadingElement={ <div style={{ height: `400px`, width: '800px' }} /> }
         containerElement={ <div style={{ height: `400px`, width: '800px' }} /> }
         mapElement={<div style={{ height: `100%` }} />}
       />
     </div>
   </div>

 );
}
