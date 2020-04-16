import React, { useState, useEffect } from 'react';
import { IconButton } from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});

export default function DialogBox(props) {
  return (
    <>
      <Dialog
        open={props.open}
        TransitionComponent={Transition}
        keepMounted
        onClose={props.handleClose}
        aria-labelledby='alert-dialog-slide-title'
        aria-describedby='alert-dialog-slide-description'
      >
        <DialogTitle id='alert-dialog-slide-title'>
          {'Delete ' + props.row.name + '?'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='alert-dialog-slide-description'>
            {'Are you sure you want to delete ' + props.row.name + '?'}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <IconButton onClick={props.handleClose} color='primary'>
            Cancel
          </IconButton>
          <IconButton
            onClick={() => {
              props.handleDelete(props.row);
            }}
            color='primary'
          >
            Yes
          </IconButton>
        </DialogActions>
      </Dialog>
    </>
  );
}
