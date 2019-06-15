import React, {Component, useMemo, useEffect, useState} from 'react';
import Dropzone, {useDropzone} from 'react-dropzone';

const thumbsContainer = {
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  marginTop: 16
};

const thumb = {
  display: 'inline-flex',
  borderRadius: 2,
  border: '1px solid #eaeaea',
  marginBottom: 8,
  marginRight: 8,
  width: 300,
  height: 533,
  padding: 4,
  boxSizing: 'border-box'
};

const thumbInner = {
  display: 'flex',
  minWidth: 0,
  overflow: 'hidden'
};

const img = {
  display: 'block',
  width: 'auto',
  height: '100%'
};

const baseStyle = {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  borderWidth: 2,
  borderRadius: 2,
  borderColor: '#eeeeee',
  borderStyle: 'dashed',
  backgroundColor: '#fafafa',
  color: '#bdbdbd',
  outline: 'none',
  transition: 'border .24s ease-in-out'
};

const activeStyle = {
  borderColor: '#2196f3'
};

const acceptStyle = {
  borderColor: '#00e676'
};

const rejectStyle = {
  borderColor: '#ff1744'
};

function testing(media){

  const file = media[0];

  /*

  if (creative.width !== 1080 || creative.height !== 1920) {
    console.log({
      correctsize: false,
      width: creative.width,
      height: creative.height
    });
    // pass a counter or something to the rejectedFiles array
    return false;
  } else {
    console.log({
      correctsize: true,
      width: creative.width,
      height: creative.height
    });
    return true;
  }

  */

}

function mediaValidation() {
  console.log("testing")
  return true
}

function Previews(props) {
  const [files, setFiles] = useState([]);
    //    ^value    ^setter
  const { isDragActive, getRootProps, getInputProps, isDragReject, isDragAccept, rejectedFiles, acceptedFiles } = useDropzone({
    accept: 'image/png, image/jpg, image/jpeg, video/mov, video/mpeg', // what is mpeg and what about mp4
    onDrop: acceptedFiles => {
      if(mediaValidation()) {
        setFiles(acceptedFiles.map(file => Object.assign(file, {
          preview: URL.createObjectURL(file)
        })));
      }
      console.log(acceptedFiles[0]) // this is what needs to be passed from child to parent and then into storage
    }
  });

  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
        />
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  // look up what useMemo does
  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
      isDragActive,
      isDragReject
    ]);

  // add the object brackets for to render an error message to the user if image is not the correct size
  return (
    <section className="container">
      <div {...getRootProps({className: 'dropzone', style})}>
        <input {...getInputProps()} />
        <p> Drag & drop oe click here to upload media! </p>
      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>
  );
}

class ContentContainer extends Component {
  constructor(props) {

      super(props);

      this.state = {
        media: null,
        url: '',
        progress: 0,
      };

    }

  render() {
    return (
      <div>
        <Previews />
      </div>
    )
  }
}

export default ContentContainer



/* *************** V1 ********************





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
          this.props.addMediaName(mediaName.toLowerCase());
          return true;
        }
      }
      return false;
    }

    handleUpload = () => {

      console.log("I want to upload!");

      // userId is the bucket name is the bucket name
      // const userId = this.state.userId.uid;
      // console.log(userId);
      //console.log(media);
      // console.log(media.media);

      const {media} = this.state;

      console.log("---this is the meida");
      console.log(media);
      console.log("---");


      if(!this.formValidation(media.media.name)) {
        return;
      }

      // console.log("getting here"); works
      this.props.addMediaFile(media); // {media} is throwing an error // media.media is throwing an error

    }


    // you can't call handle upload right away because it takes time for the state to be set
      // setState() has an optional callback parameter that you can use for this.
    handleDrop = (files, event) => {
        //console.log(files.length);
        //console.log(files, event);
        const media = files[0];
        console.log("before set state");
        console.log(media);
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
        },200)

    }

    onDragOver = (event) => {

      // console.log(this.state.media);

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

                </Box>
            </Box>
        );
    }
}

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

export default connect(mapStateToProps, mapDispatchToProps)(ContentContainer);
 */
