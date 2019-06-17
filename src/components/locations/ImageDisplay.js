
import React, {Component} from 'react'
import './ImageDisplay.css'

var imageName = require('../../data/images/ProperFashionsVenueImage.jpg')

class ImageDisplay extends Component {

  render() {
    return (
      <div className="imageContainer">
        <img src={imageName} />
      </div>
    )
  }
}

export default ImageDisplay
