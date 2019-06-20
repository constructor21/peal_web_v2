
import React, {Component} from 'react'
import './ImageDisplay.css'

var properFashionsVenueImage = require('../../data/images/ProperFashionsVenueImage.jpg')
var auCoqueletVenueImage = require('../../data/images/AuCoqueletVenueImage.png')
var baianoPizzeriaVenueImage = require('../../data/images/BaianoPizzeriaVenueImage.png')


var gotItI = localStorage.getItem("localStorageVariableName")
var selectedBusinessImageDisplayReceiver;


var imageDictionary = {
  "Baiano Pizzeria": baianoPizzeriaVenueImage,
  "Au Coquelet": auCoqueletVenueImage,
  "Proper Fashion": properFashionsVenueImage
}


class ImageDisplay extends Component {

  render() {

    console.log("testing logging in image display")
    console.log(gotItI);

    return (
      <div className="imageContainer">
        <img src={baianoPizzeriaVenueImage} />
      </div>
    )
  }
}

export default ImageDisplay
