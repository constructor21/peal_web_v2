import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import { connect } from 'react-redux'
import {storage} from '../../config/fbConfig';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});


class UploadButton extends Component {

  constructor(props) {
      super(props);

      this.state = {
        media: null,
        url: '',
        progress: 0,
        userId: this.props.auth
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleUpload = this.handleUpload.bind(this);
      this.formValidation = this.formValidation.bind(this);

    }

    handleChange = e => {
      if (e.target.files[0]) {
        const media = e.target.files[0];
        // console.log("_______");
        // console.log(media); // this is the acutal file
        // console.log("_______");
        this.setState(() => ({media}));
      }
    }

    formValidation = (mediaName) => {
      const validFileExtensions = ['.mp4', '.mov', '.png', '.jpg', '.jpeg'];
      console.log("---");
      console.log(mediaName.toLowerCase());
      console.log("---");
      for (var i = 0; i != validFileExtensions.length; i++) {
        if(mediaName.toLowerCase().includes(validFileExtensions[i])) {
          this.props.addMediaName(mediaName.toLowerCase()); // this is what adds the creative name to the state !
          return true;
        }
      }
      return false;
    }

    handleUpload = (e) => {
      e.preventDefault();
      // userId is the bucket name is the bucket name
      const userId = this.state.userId.uid;
      // console.log(userId);
      const {media} = this.state;

      //console.log("****");
      //console.log({media}); // this is the acutal file, save to redux state
      //console.log("****");

      if(!this.formValidation(media.name)) {
        return;
      }

      this.props.addMediaFile({media});
      // console.log(media) is the same thing

    }

  render() {

    const { classes } = this.props;

    const { auth } = this.props;

    return (

          <div>
            <input
              accept="image/*, video/*"
              className={classes.input}
              id="outlined-button-file"
              multiple
              type="file"
              onChange={this.handleChange}
            />
            <label htmlFor="outlined-button-file">
              <Button variant="outlined" component="span" className={classes.button}>
                Upload From Computer
              </Button>
            </label>
            <button onClick={this.handleUpload}> Confirm </button>
          </div>

    );
  }
}

UploadButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    creativeName: state.creativeName
  }
}

const mapDispatchToProps = (dispatch) => {
  return {

    addMediaName: (value) => {
      dispatch({ type: 'ADD_MEDIA_NAME', payload: value })
    },
    addMediaFile: (value) => {
      dispatch({ type: 'SAVE_MEDIA_FILE', payload: value })
    }

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(UploadButton));
