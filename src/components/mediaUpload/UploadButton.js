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

// TODO: hide btn on click

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

    }

    handleChange = e => {
      if (e.target.files[0]) {
        const media = e.target.files[0];
        console.log("_______");
        console.log(media);
        console.log("_______");
        this.setState(() => ({media})); // save to the gloabl redux store
      }
    }


    handleUpload = (e) => {
      e.preventDefault();
      // userId is the bucket name is the bucket name
      const userId = this.state.userId.uid;
      console.log(userId);
      const {media} = this.state;
      const uploadTask = storage.ref(`${userId}/${media.name}`).put(media);
      // state changed is the defualt event listener
      uploadTask.on('state_changed',
      (snapshot) => {
        // progrss function ....
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({progress});
      },
      (error) => {
           // error function ....
        console.log(error);
      },
      () => {
          // complete function ....
          storage.ref(`${userId}`).child(media.name).getDownloadURL().then(url => {
              console.log(url);
              this.setState({url});
          })
      });
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
            <progress value={this.state.progress} max="100"/>
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
  }
}

export default connect(mapStateToProps)(withStyles(styles)(UploadButton));
