import React, { useEffect, useState } from 'react';
import '../css/create_task.css';
import Grow from '@material-ui/core/Grow';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import TaskList from '../custom_components/task_list.js';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Grow direction="up" ref={ref} {...props} />;
});

function TaskForm() {
    return (<React.Fragment></React.Fragment>);
}

function CreateTask(props) {
    const [title, setTitle] = React.useState();
    const [content, setContent] = React.useState();
    
  
    const handleClose = () => {
        props.close_create_task();
    };
  
    useEffect(() => {
        setTitle('Create New Task');
        setContent(<TaskList tasks={props.tasks} />);
    }, []);
  
    return (
        <Dialog
          className="dialog_box"
          open={props.opened}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-labelledby="dialog_title"
          aria-describedby="dialog_description"
        >
          <DialogTitle id="dialog_title">{title}</DialogTitle>
          <DialogContent dividers>
              {content}
          </DialogContent>
          <DialogActions>
            <Button id="close_button" onClick={handleClose}>
              Add
            </Button>
          </DialogActions>
        </Dialog>
    );
}

export default CreateTask;