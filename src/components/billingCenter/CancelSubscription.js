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

class CancelSubscription extends Component {

  state = {
    open: false,
    subscriptionCancelled: false
  };

  handleClickOpen = () => {
    this.setState({
      open: true,
    });
  };

  handleCloseWithYesPressed = () => {
    console.log("user initiated cancel subscription action");
    this.setState({ open: false });
    // this.props.deleteCampaign(this.props.documentId);
    this.setState({
      subscriptionCancelled: true,
    });

  };

  render() {

    return (

      <div>
       <Button className="btn-small red delete-campaign-button" onClick={this.handleClickOpen}>
         Cancel Subscription
       </Button>
       <Dialog
         onClose={this.handleClose}
         aria-labelledby="customized-dialog-title"
         open={this.state.open}
       >
         <DialogTitle id="customized-dialog-title" onClose={this.handleClose}>
           Are you sure you want to cancel this subscription?
         </DialogTitle>
         <DialogContent dividers>
           <Typography gutterBottom>
             Please email hello@pealdisplay.com to notify us you would like to cancel this subscription and
             stop being charged.
           </Typography>
         </DialogContent>
         <DialogActions>
           <Button onClick={this.handleCloseWithYesPressed} color="primary">
             Got it
           </Button>
         </DialogActions>
       </Dialog>
     </div>

    )
  }

}

export default CancelSubscription
