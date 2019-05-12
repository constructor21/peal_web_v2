import React, { Component } from 'react'

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

export default CreateCampaign;
