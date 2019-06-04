import React from 'react';
import { NavLink } from 'react-router-dom'
import './SideDrawer.css';
import { connect } from 'react-redux'
import { signOut } from '../../../store/actions/authActions'

const SideDrawer = props => {
  let drawerClasses = 'side-drawer';
  if (props.show) {
    drawerClasses = 'side-drawer open';
  }
  return (
    <div>
      <nav className={drawerClasses}>
      <ul>
        <li><NavLink to='/dashboard'> Home </NavLink></li>
        <li><NavLink to='/create'> Create </NavLink></li>
        <li><NavLink to='/billing'> Billing </NavLink></li>
        <li><NavLink to='/locations'> Locations </NavLink></li>
        <li><a onClick={props.signOut}>Sign Out</a></li>
      </ul>
      </nav>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}


export default connect(null, mapDispatchToProps)(SideDrawer);
