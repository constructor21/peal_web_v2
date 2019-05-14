import React from 'react'
import { Link } from 'react-router-dom'
import NavbarLinks from './NavbarLinks'
import { connect } from 'react-redux'

const Navbar = () => {
  return (
    <nav className="nav-wrapper grey darken-3">
      <div className="container">
        <Link to='/' className="brand-logo">Peal Display</Link>
        <NavbarLinks />
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
