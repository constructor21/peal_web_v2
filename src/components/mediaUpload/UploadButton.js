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

    handleUpload = () => {
      // userId is the bucket name is the bucket name
      const userId = this.state.userId.uid;
      // console.log(userId);
      const {media} = this.state;

      if(!this.formValidation(media.media.name)) {
        return;
      }

      this.props.addMediaFile(media);
      // console.log(media) is the same thing as {media}

    }


    handleChange = e => {
      if (e.target.files[0]) {
        const media = e.target.files[0];
        console.log("_______");
        console.log(media); // this is the acutal file
        console.log("_______");

        console.log("safsa")
        console.log({media}); // this is {media: File}
        console.log("lskjfs")


        // this.setState(() => ({media}));    // this works (but requires the confirmation button being pressed)

        this.setState(
          {
            media: {media}
          },
          function() {
              console.log("setState completed", this.state)
          }

        );

        setTimeout(() => {
          console.log("in timeout");
          this.handleUpload();
          // console.log("you can call handle upload now");
        },200)



      }
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
