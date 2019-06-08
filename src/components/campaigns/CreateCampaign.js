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
    mediaTitle: this.props.creativeName,
    campaignLength: this.props.day,
    firebaseAuthId: '',
    mediaFile: this.props.mediaFile,
    authId: this.props.auth.uid,
    mediaError: '',
    dateError: '',
    titleError: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }

  creationValidation = () => {

  }

  handleSubmit = (e) => {
    e.preventDefault();

    // Do the validation here -> set the state of the error messages

    console.log("handle submit function called");
    console.log(this.state); // check this --> the media file is null here
    console.log("*****");

    if(this.state.mediaFile.mediaFile == null){
      console.log("no media was uploaded");
      this.setState(
        {
        mediaError: "no media was uploaded"
        },
        function() {
            console.log("setState completed", this.state)
        }
      );
    }

    if(this.state.campaignLength.day.length == 0){
      console.log("no dates were selected");
      this.setState(
        {
        dateError: "no dates were selected"
        },
        function() {
            console.log("setState completed", this.state)
        }
      );
    }

    if(this.state.title == '') {
      console.log("the media title is empty");
      this.setState(
        {
        titleError: "the media title is empty"
        },
        function() {
            console.log("setState completed", this.state)
        }
      );
    }


    if(this.state.mediaError != '' || this.state.dateError != '' || this.state.titleError != '') {
      console.log("exit");
      return;
    } else {
      console.log("don't exit");
      console.log(this.state.mediaError);
      console.log(this.state.dateError);
      console.log(this.state.titleError);
      console.log("_____");
    }

    console.log("reached campaign creation line of code");

    console.log(this.state);

    setTimeout(() => {
      console.log("in timeout");
      this.props.createCampaign(this.state);
    },200)


    // right here call a function to loop through storage files and replace the name with the campaign id
      // this means need to loop through the campaign stuff similar to the delete method?
        // make it a campaign action!
    this.props.history.push('/dashboard');
  }

  buildFirestore = (id, day, creativeName, mediaFile) => {

    // console.log(id);
    // console.log(creativeName);
    // console.log(day);

    this.setState({
      firebaseAuthId: id,
      campaignLength: day,
      mediaFile: mediaFile
    })



  }



  render() {

    const { auth } = this.props;

    const { day } = this.props;

    const { creativeName } = this.props;

    const mediaFile = this.props.mediaFile;

    console.log("inside the props");
    console.log( mediaFile );
    console.log("close media props");


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

              <button className="btn pink lighten-1" onClick={() => this.buildFirestore(  (Math.floor(Math.random() * 20000)).toString(), {day}, {creativeName}, mediaFile  )}>Create Campaign</button>
              <span class="helper-text" id="errorText">{this.state.mediaError}</span>
              <span class="helper-text" id="errorText">{this.state.dateError}</span>
              <span class="helper-text" id="errorText">{this.state.titleError}</span>

            </div>
          </form>


        </div>



      </div>
    )
  }
}


/*
Thoughts
  - ownProps argument
  - name everything mediaFile
*/

// this maps the redux store state to the props of this component
const mapStateToProps = (state) => {
  console.log("////");
  console.log(state.day); // this is updated at the same time as the redux store
  console.log("/////");
  console.log(state.creativeName);
  console.log("/////");
  console.log(state.mediaFile);
  console.log("/////");
  return {
    auth: state.firebase.auth,
    day: state.day,
    creativeName: state.creativeName,
    mediaFile: state.mediaFile
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
