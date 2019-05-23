import React from 'react'
import { NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'

const NavbarLinks = (props) => {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/create'> Create Campaign </NavLink></li>
        <li><NavLink to='/dashboard'> Home </NavLink></li>
        <li><a onClick={props.signOut}>Log Out</a></li>
      </ul>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(NavbarLinks);
