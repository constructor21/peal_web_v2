import React, { Component } from 'react'

import { connect } from 'react-redux'
import { createCampaign } from '../../store/actions/campaignActions'

import { Redirect } from 'react-router-dom'

import ContentContainer from "../mediaUpload/ContentContainer";

import './CreateCampaign.css';

import Example from '../campaignCalendar/DayPicker';

// maybe remove this.props?
class CreateCampaign extends Component {
  state = {
    title: '',
    mediaTitle: this.props.creativeName,
    campaignLength: this.props.day,
    firebaseAuthId: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state); // check this!
    this.props.createCampaign(this.state);
    // right here call a function to loop through storage files and replace the name with the campaign id
      // this means need to loop through the campaign stuff similar to the delete method?
        // make it a campaign action!
    this.props.history.push('/dashboard');
  }

  buildFirestore = (id, day) => {
    console.log(id);
    console.log(".................................", day);
    this.setState({
      firebaseAuthId: id,
      campaignLength: day
    })
  }


  render() {

    const { auth } = this.props;

    const { day } = this.props;

    const { creativeName } = this.props;


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
              <button className="btn pink lighten-1" onClick={() => this.buildFirestore(  (Math.floor(Math.random() * 20000)).toString(), {day}  )}>Create Campaign</button>
            </div>
          </form>

        </div>

      </div>
    )
  }
}

// this maps the redux store state to the props of this component
const mapStateToProps = (state) => {
  console.log("////");
  console.log(state.day); // this is updated at the same time as the redux store
  console.log("/////");
  console.log(state.creativeName);
  console.log("/////");
  return {
    auth: state.firebase.auth,
    day: state.day,
    creativeName: state.creativeName.creativeName
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
