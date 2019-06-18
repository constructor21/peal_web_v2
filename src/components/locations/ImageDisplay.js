
import React, {Component} from 'react'
import './ImageDisplay.css'

var properFashionsVenueImage = require('../../data/images/ProperFashionsVenueImage.jpg')
var auCoqueletVenueImage = require('../../data/images/AuCoqueletVenueImage.png')
var baianoPizzeriaVenueImage = require('../../data/images/BaianoPizzeriaVenueImage.png')


class ImageDisplay extends Component {

  render() {
    return (
      <div className="imageContainer">
        <img src={baianoPizzeriaVenueImage} />
      </div>
    )
  }
}

export default ImageDisplay
