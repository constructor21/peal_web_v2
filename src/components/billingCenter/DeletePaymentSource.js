import React, { Component } from 'react'

import { Redirect } from 'react-router-dom'

import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

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

class DeletePaymentSource extends Component {

  state = {
    open: false,
    paymentSourceDeleted: false
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
    console.log("user initiated delete payment source action");
    this.setState({ open: false });
    // this.props.deleteCampaign(this.props.documentId);
    this.setState({
      paymentSourceDeleted: true,
    });

  };

  render() {

    return (

      <div>
       <Button className="btn-small red delete-campaign-button" onClick={this.handleClickOpen}>
         Delete Payment Source
       </Button>
       <Dialog
         onClose={this.handleClose}
         aria-labelledby="customized-dialog-title"
         open={this.state.open}
       >
         <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
           Are you sure you want to delete this payment source?
         </DialogTitle>
         <DialogContent dividers>
           <Typography gutterBottom>
             You will not be charged on this card anymore. If this is your only payment source on file with us please
             add another one before your billing cycle occurs to avoid an interruption in your service.
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

export default DeletePaymentSource
