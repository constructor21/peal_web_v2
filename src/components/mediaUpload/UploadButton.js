import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
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
        image: null,
        url: '',
        progress: 0
      }

      this.handleChange = this.handleChange.bind(this);
      this.handleUpload = this.handleUpload.bind(this);

    }

    handleChange = e => {
      if (e.target.files[0]) {
        const image = e.target.files[0];
        console.log("_______");
        console.log(image);
        console.log("_______");
        this.setState(() => ({image})); // save to the gloabl redux store
      }
    }

    // you need to call this in the create campaign action file
    handleUpload = (e) => {
      e.preventDefault();
      // images is the bucket name
      const {image} = this.state;
      const uploadTask = storage.ref(`images/${image.name}`).put(image);
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
          storage.ref('images').child(image.name).getDownloadURL().then(url => {
              console.log(url);
              this.setState({url});
          })
      });
    }

  render() {
    const { classes } = this.props;
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

export default withStyles(styles)(UploadButton);
