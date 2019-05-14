
import React from 'react'
import { Link } from 'react-router-dom'

import './Footer.css';

const Footer = () => {
  return (

    <footer className="page-footer grey darken-3 custom-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5>Peal Display</h5>
            <p>800 Indiana Street</p>
            <p>San Francisco, CA 94107</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Browse</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="#">Terms of Use</a></li>
              <li><a className="grey-text text-lighten-3" href="#">Privacy Policy</a></li>
              <li><a className="grey-text text-lighten-3" href="#">Nondiscrimination Policy</a></li>
              <li><a className="grey-text text-lighten-3" href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer-copyright grey darken-4">
        <div class="container center-align">&copy; 2019 Peal Display, Inc.</div>
      </div>
    </footer>


  )
}

export default Footer;
