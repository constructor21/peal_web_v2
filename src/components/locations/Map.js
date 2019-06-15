
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

  return (

    <GoogleMap
      defaultZoom={10}
      defaultCenter = { { lat: 37.774929, lng: -122.419416 } }
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
            <p>{selectedDisplay.properties.DESCRIPTION}</p>
          </div>
        </InfoWindow>
      )}

    </GoogleMap>

  );

}

// TODO: route guarding

const MapWrapped = withScriptjs(withGoogleMap(ReactMap));

// TODO: make a .env.local file to hold the api key

// TODO: need an image of the display on the side of the map when you click on it 

export default function Map() {
  return (

   <div className="setMapPosition"  id="map-box">
     <MapWrapped
       googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=AIzaSyCBggHcthnSSx33LABZX6DsNb1xrNxXd40`}
       loadingElement={ <div style={{ height: `400px`, width: '800px' }} /> }
       containerElement={ <div style={{ height: `400px`, width: '800px' }} /> }
       mapElement={<div style={{ height: `100%` }} />}
     />
   </div>

 );
}
