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

    console.log("validate method called");

    let isError = false;

    const errors = {
      mediaError: '',
      dateError: '',
      titleError: ''
    };

    if(this.state.mediaFile.mediaFile == null && this.state.mediaTitle.creativeName == ''){
      // console.log("no media was uploaded");
      isError = true;
      errors.media = "no media was uploaded";

    }

    if(this.state.campaignLength.day.length == 0){
      // console.log("no dates were selected");
      isError = true;
      errors.days = "no dates were selected";

    }

    if(this.state.title == '') {
      // console.log("the media title is empty");
      isError = true;
      errors.name = "the media title is empty";
    }

    this.setState({
      mediaError: errors.media,
      dateError: errors.days,
      titleError: errors.name
    });

    return isError;

  }

  handleSubmit = (e) => {
    e.preventDefault();

    // console.log("handle submit function called");
    // console.log(this.state); // check this --> the media file is null here
    // console.log("*****");

    const err = this.creationValidation();

    // if there are no errors
    if (!err) {

      // clear form
      this.setState({
        address: "",
        addressError: "",
        city: "",
        cityError: "",
        zipCode: "",
        zipCodeError: ""
      });

      // create the campaign
      this.props.createCampaign(this.state);

      this.props.history.push('/dashboard');

    } else {
      console.log("there's an error!")
    }


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
            <h6 className="grey-text text-darken-3">Step 1: Upload Content (1080 x 1920 for best results) </h6>
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
