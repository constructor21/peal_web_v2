import React, { Component } from 'react';
import FileDrop from 'react-file-drop';
import { Box } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import './react-file-drop.css'

import styled from "styled-components";

import OutlinedButtons from './UploadButton';

import MaterialTextField from '@material-ui/core/TextField';

import { connect } from 'react-redux'
import {storage} from '../../config/fbConfig';

var styles = { border: '1px dashed blue', height: 500, width: 325, color: "black" };

// TODO: gestalt video uploader or react drop zone

class ContentContainer extends Component {

  constructor(props) {
      super(props);

      this.state = {
        media: null,
        url: '',
        progress: 0,
        userId: this.props.auth
      };

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
          //this.props.addMediaName(mediaName.toLowerCase());
          return true;
        }
      }
      return false;
    }

    handleUpload = () => {

      console.log("I want to upload!");

      // userId is the bucket name is the bucket name
      const userId = this.state.userId.uid;
      // console.log(userId);
      const {media} = this.state;

      //console.log(media);

      // console.log(media.media);

      if(!this.formValidation(media.media.name)) {
        return;
      }

      const uploadTask = storage.ref(`${userId}/${media.media.name}`).put(media.media);
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
          storage.ref(`${userId}`).child(media.media.name).getDownloadURL().then(url => {
              console.log(url);
              this.setState({url});
          })
      });

    }

    // TODO: make confirm button go away after this has been called

    // you can't call handle upload right away because it takes time for the state to be set
      // setState() has an optional callback parameter that you can use for this.
    handleDrop = (files, event) => {
        //console.log(files.length);
        //console.log(files, event);
        const media = files[0];
        console.log(media);
        this.setState(
          {
            media: {media}
          },
          function() {
              console.log("setState completed", this.state)
            // this.handleUpload();
          }

        );

        setTimeout(() => {
          this.handleUpload();
        },200)

    }

    onDragOver = (event) => {

      console.log(this.state.media);

    }

    onFrameDragEnter = (event) => {

    }

    render() {

        const { auth } = this.props;

        return (
            <Box align="center" width={600}>
                <Box width={600} marginBottom={1} marginTop={6}>

                </Box>

                <Box align="center">
                    <div id="react-file-drop-demo" align="start" style={styles}>
                        <FileDrop align="start" onDrop={this.handleDrop} onDragOver={this.onDragOver}>
                            Drag and Drop a Video / Image
                            <br />
                            OR
                        <OutlinedButtons />
                        </FileDrop>

                    </div>

                    <MaterialTextField
                      id="standard-name"
                      label="Click Confirm to Begin Download After Uploading"
                      placeholder="file name will be displayed here"
                      value={this.state.mediaFileName}
                      margin="normal"
                      style = {{width: 300}}
                  />



                </Box>
            </Box>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth
  }
}

export default connect(mapStateToProps)(ContentContainer);
