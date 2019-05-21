import React from 'react';
import FileDrop from 'react-file-drop';
import { Box } from 'gestalt';
import 'gestalt/dist/gestalt.css';
import './react-file-drop.css'

import OutlinedButtons from './UploadButton';



var styles = { border: '1px dashed black', height: 500, width: 325, color: "black" };


class NewVideoPage extends React.Component {
    handleDrop = (files, event) => {
        console.log(files.length);
        console.log(files, event);
        console.log("drop recognized...");
    }

    onDragOver = (event) => {
      console.log("dragging over...");
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

export default NewVideoPage;
