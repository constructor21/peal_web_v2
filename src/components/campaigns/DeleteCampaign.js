import React, { Component } from 'react'
import './DeleteCampaign.css'

import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    margin: 0,
    //padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
    //right: theme.spacing(1),
    //top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)(props => {
  const { children, classes, onClose } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root}>
      <Typography variant="h6">{children}</Typography>
      {onClose ? (
        <IconButton aria-label="Close" className={classes.closeButton} onClick={onClose}>
          {/* <CloseIcon />*/}
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles(theme => ({
  root: {
    //padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles(theme => ({
  root: {
    margin: 0,
    //padding: theme.spacing(1),
  },
}))(MuiDialogActions);

class DeleteCampaign extends Component {

  state = {
    open: false,
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleCloseWithYesPressed = () => {
    console.log("user initiated delete campaign action");
    this.setState({ open: false });
  };

  render() {
    return (

      <div>
       <Button className="btn-small red delete-campaign-button" onClick={this.handleClickOpen}>
         Delete Campaign
       </Button>
       <Dialog
         onClose={this.handleClose}
         aria-labelledby="customized-dialog-title"
         open={this.state.open}
       >
         <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
           Are you sure you want to delete this campaign?
         </DialogTitle>
         <DialogContent dividers>
           <Typography gutterBottom>
             All media files pertaining to this campaign will be wiped from our servers and can not be recovered.
             Performance data pertaining to this campaign is still available to you.
           </Typography>
         </DialogContent>
         <DialogActions>
           <Button onClick={this.handleCloseWithYesPressed} color="primary">
             Yes
           </Button>
           <Button onClick={this.handleClose} color="primary">
             No
           </Button>
         </DialogActions>
       </Dialog>
     </div>

    )
  }

}

export default DeleteCampaign
