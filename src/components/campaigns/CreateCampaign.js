import React, { Component } from 'react'

import { connect } from 'react-redux'
import { createCampaign } from '../../store/actions/campaignActions'

class CreateCampaign extends Component {
  state = {
    title: '',
    mediaContent: '',
    startDate: '',
    endDate: ''
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
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Create a New Campaign</h5>
          <div className="input-field">
            <input type="text" id='title' onChange={this.handleChange} />
            <label htmlFor="title">Campaign Title</label>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">Create Campaign</button>
          </div>
        </form>
      </div>
    )
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
export default connect(null, mapDispatchToProps)(CreateCampaign)
