import React, { useEffect, useState, useMemo, Component } from 'react';
import Dropzone, { useDropzone } from 'react-dropzone';
import { read } from 'fs';



const ContentContainer = () => {

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

  const maxSize = 1048576;


  const [files, setFiles] = useState([]);

  const { isDragActive, getRootProps, getInputProps, isDragReject, isDragAccept, rejectedFiles, acceptedFiles } = useDropzone({
    accept: 'image/png, image/jpg, image/jpeg, video/mov, video/mpeg',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
      console.log(acceptedFiles);
      // isFileIncorrectDimensions(acceptedFiles);
    },
    minSize: 0,
    maxSize,
    multiple: false,

  });

  const isFileTooLarge = rejectedFiles.length > 0 && rejectedFiles[0].size > maxSize;

  let isFileIncorrectDimensions = () => {
    const file = acceptedFiles[0];

    if (file.type.startsWith("image")) {
      console.log("file is an image");
    } else {
      console.log("file is not an image", file.type);
    }

    const creative = new Image()

    console.log("measuring file dimensions");


    creative.onload = () => {
      let reader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = () => {

        if (creative.width !== 1080 || creative.height !== 1920) {
          console.log({
            correctsize: false,
            width: creative.width,
            height: creative.height
          });
          //acceptedFiles[0] = null;
          return true;
        } else {
          console.log({
            correctsize: true,
            width: creative.width,
            height: creative.height
          });
          return false;
        }

      }
    }
    creative.src = file.preview;



  };


  const thumbs = files.map(file => (
    <div style={thumb} key={file.name}>
      <div style={thumbInner}>
        <img
          src={file.preview}
          style={img}
          alt="no img"
        />
      </div>
    </div>
  ));

  useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
  }, [files]);

  const style = useMemo(() => ({
    ...baseStyle,
    ...(isDragActive ? activeStyle : {}),
    ...(isDragAccept ? acceptStyle : {}),
    ...(isDragReject ? rejectStyle : {})
  }), [
      isDragActive,
      isDragReject
    ]);

  const readImageDimensions = () => {


  };

  const test = () => {


  }

  return (
    <section className="container">
      <div {...getRootProps({ className: 'dropzone', style })}>
        <input {...getInputProps()} />
        {!isDragActive && 'Click here or drop a file to upload!'}
        {isDragActive && !isDragReject && "Drop it like it's hot!"}
        {isDragReject && "File type not accepted, sorry!"}
        {isFileTooLarge && (
          <div className="text-danger mt-2">
            File is too large. Max File Size is 5MB.
          </div>
        )}
        {rejectedFiles.length > 0 && !isFileTooLarge && (
          <div className="text-danger mt-2">
            File type not accepted, sorry!
          </div>
        )}
        {acceptedFiles.length > 0 && isFileIncorrectDimensions() (
          <FileDimensions {...acceptedFiles}> </FileDimensions>
        )}

      </div>
      <aside style={thumbsContainer}>
        {thumbs}
      </aside>
    </section>
  )

}
export default ContentContainer;


class FileDimensions extends Component {



  dim = () => {
    console.log("proppps", this.props[0]);
    const file = this.props[0];

    if (file.type.startsWith("image")) {
      console.log("file is an image");
    } else {
      console.log("file is not an image", file.type);
    }

    const creative = new Image()

    console.log("measuring file dimensions");
    creative.src = file.preview;

    return creative.onload = () => {
    if (creative.width !== 1080 || creative.height !== 1920) {
      console.log({
        correctsize: false,
        width: creative.width,
        height: creative.height
      });
      //acceptedFiles[0] = null;
      return false;
    } else {
      console.log({
        correctsize: true,
        width: creative.width,
        height: creative.height
      });
      return true;
    }
  }

    // return creative.onload = () => {
    //   let reader = new FileReader()
    //   reader.readAsDataURL(file)
    //   return reader.onload = () => {

    //     if (creative.width !== 1080 || creative.height !== 1920) {
    //       console.log({
    //         correctsize: false,
    //         width: creative.width,
    //         height: creative.height
    //       });

    //       return false;
    //     } else {
    //       console.log({
    //         correctsize: true,
    //         width: creative.width,
    //         height: creative.height
    //       });

    //       return true;
    //     }
    //   };
    //};
  };

  render() {

    // then((result) => {
    let result = this.dim();
      if (result) {
        console.log("gddd", result);
        return (
          <div className="text-danger mt-2">
                File dimensions are correct, woohooo!
          </div>
        );
      } else {
        console.log("jjhhgg", result);
        return (
          <div className="text-danger mt-2">
                File dimensions (height and width) issssss incorrect, sorry!
          </div>
        );
       }




  };
}
