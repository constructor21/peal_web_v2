import React from 'react';
import FileDrop from 'react-file-drop';
import { Box } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import './react-file-drop.css'

import styled from "styled-components";

import OutlinedButtons from './UploadButton';

import MaterialTextField from '@material-ui/core/TextField';

var styles = { border: '1px dashed blue', height: 500, width: 325, color: "black" };

// TODO: gestalt video uploader or react drop zone

class ContentContainer extends React.Component {

  constructor(props) {
      super(props);

      this.state = {
          mediaFileName: ''
      };

    }

    handleDrop = (files, event) => {
        //console.log(files.length);
        //console.log(files, event);
        console.log(files[0].name);
        this.setState({
          mediaFileName: files[0].name
        })
    }

    onDragOver = (event) => {

    }

    onFrameDragEnter = (event) => {

    }

    render() {
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
                      label="Click The Upload Button"
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

export default ContentContainer;
