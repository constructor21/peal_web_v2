
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
              <li><a className="grey-text text-lighten-3" href="https://www.instagram.com/pealdisplay/">Instagram</a></li>
              <li><a className="grey-text text-lighten-3" href="https://twitter.com/IncPeal">Twitter</a></li>
              <li><a className="grey-text text-lighten-3" href="https://www.youtube.com/channel/UCD-ghZkzA3m-lxYzAF1mhlg">YouTube</a></li>
              <li></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright grey darken-4">
        <div className="container center-align">&copy; 2019 Peal Display, Inc. / <a className="grey-text text-lighten-3" href="https://www.pealdisplay.com/privacy-policy">Privacy Policy</a>  / <a className="grey-text text-lighten-3" href="https://www.pealdisplay.com/terms">Terms of Use</a> / <a className="grey-text text-lighten-3" href="https://www.pealdisplay.com/non-discrimination-policy">Nondiscrimination Policy</a> / <a className="grey-text text-lighten-3" href="https://www.pealdisplay.com/contact">Contact Us</a> </div>
      </div>
    </footer>


  )
}

export default Footer;
