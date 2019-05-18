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
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/dashboard' className="brand-logo">Peal Display</Link>
        {links}
      </div>
    </nav>
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
