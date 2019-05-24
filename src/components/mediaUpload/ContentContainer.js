import React from 'react';
import FileDrop from 'react-file-drop';
import { Box, Container, Heading, TextField } from 'gestalt';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import 'gestalt/dist/gestalt.css';
import './react-file-drop.css'

import styled from "styled-components";

import OutlinedButtons from './UploadButton';

const ComponentTitle = styled.div`
    text-size: 20px;
    max-width: 600px;
    color: rgba(0, 0, 0, 1);
    marginTop: 2px;
    padding-bottom: 1px;
    border-bottom: 1px solid rgba(0, 0, 0, 1);
`;

var styles = { border: '1px dashed black', height: 500, width: 325, color: "black" };


class ContentContainer extends React.Component {
    handleDrop = (files, event) => {
        console.log(files.length);
        //files
        console.log(files, event);
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
                </Box>
            </Box>
        );
    }
}

export default ContentContainer;
