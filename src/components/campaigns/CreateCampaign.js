import React, { Component } from 'react'

import { connect } from 'react-redux'
import { createCampaign } from '../../store/actions/campaignActions'

import { Redirect } from 'react-router-dom'

import ContentContainer from "../mediaUpload/ContentContainer";

import './CreateCampaign.css';

import Example from '../campaignCalendar/DayPicker';


class CreateCampaign extends Component {
  state = {
    title: '',
    mediaContent: '',
    startDate: '',
    endDate: '',
    firebaseAuthId: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.createCampaign(this.state);
    this.props.history.push('/dashboard');
  }

  buildFirestore = (id) => {
    console.log(id);
    // Here is where you can map a firestore campaign ID to the user
    this.setState({
      firebaseAuthId: id
    })
  }


  render() {

    const { auth } = this.props;

    if (!auth.uid) return <Redirect to='/' />

    return (

      <div>

        <h5 className="grey-text text-darken-3 center-align">Create a New Campaign in 3 Simple Steps</h5>

        <div className="container">

          <form className="white bottom-padding-override">
            <h6 className="grey-text text-darken-3">Step 1: Upload Content </h6>
            <span> _____ </span>
            <ContentContainer />
          </form>


          <form className="white bottom-padding-override">
            <h6 className="grey-text text-darken-3">Step 2: Select Length of the Campaign </h6>
            <span> _____ </span>
            <Example />
          </form>


          <form className="white" onSubmit={this.handleSubmit}>
            <h6 className="grey-text text-darken-3">Step 3: Name the Campaign </h6>
            <span> _____ </span>
            <div className="input-field">
              <input type="text" id='title' onChange={this.handleChange} />
              <label htmlFor="title">Campaign Title</label>
            </div>
            <div className="input-field">
              <button className="btn pink lighten-1" onClick={() => this.buildFirestore(  (Math.floor(Math.random() * 20000)).toString()  )}>Create Campaign</button>
            </div>
          </form>

        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

// connect is a funciton which returns a higher order component

// now we can access createCampaign on the props object
const mapDispatchToProps = (dispatch) => {
  return {
    // accepts an individual campaign that we are passing to the dispatch function an action creator
    createCampaign: (campaign) => dispatch(createCampaign(campaign))
  }
}

// mapStateToProps is the first parameter of the connect function -> passed in null since you aren't using it
export default connect(mapStateToProps, mapDispatchToProps)(CreateCampaign)
