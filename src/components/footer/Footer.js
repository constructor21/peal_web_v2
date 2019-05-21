
import React from 'react'

import './Footer.css';

const Footer = () => {
  return (

    <footer className="page-footer grey darken-3 custom-footer">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <h5>Peal Display, Inc.</h5>
            <p>800 Indiana Street</p>
            <p>San Francisco, CA 94107</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <h5 className="white-text">Connect With Us</h5>
            <ul>
              <li><a className="grey-text text-lighten-3" href="#">Instagram</a></li>
              <li><a className="grey-text text-lighten-3" href="#">Twitter</a></li>
              <li><a className="grey-text text-lighten-3" href="#">Facebook</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright grey darken-4">
        <div className="container center-align">&copy; 2019 Peal Display, Inc. / <a className="grey-text text-lighten-3" href="#">Privacy Policy</a>  / <a className="grey-text text-lighten-3" href="#">Terms of Use</a> / <a className="grey-text text-lighten-3" href="#">Nondiscrimination Policy</a> </div>
      </div>
    </footer>


  )
}

export default Footer;
