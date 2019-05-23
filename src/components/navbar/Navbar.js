import React from 'react'
import { Link } from 'react-router-dom'
import NavbarLinks from './NavbarLinks'
import SignInPageLinks from './SignInPageLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
  // destructure the props to get the auth property
    // we simply pulling auth from the mapStateToProps function below
  const { auth } = props;
  // console.log(auth);
  const links = auth.uid ? <NavbarLinks /> : <SignInPageLinks />;

  return (

    <div>


    <div className="navbar-fixed">
      <nav className="nav-wrapper grey darken-3">
        <div className="container">

          <Link to='/dashboard' className="brand-logo">Peal Display</Link>


          <a href="#" class="sidenav-trigger" data-target="mobile-links">
            <i className="material-icons">menu</i>
          </a>
          <ul className="right hide-on-med-and-down">
            {/*<li><a href="#">Home</a></li>*/}
            {links}
          </ul>

        </div>

      </nav>
    </div>

      <ul class="sidenav" id="mobile-links">
        {links}
      </ul>

    </div>

  )
}

const mapStateToProps = (state) => {
  console.log(state);
  // isEmpty: true ... means no one is signed in
  return{
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(Navbar)
