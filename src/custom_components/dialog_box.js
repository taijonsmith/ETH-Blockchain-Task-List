import React, { useEffect } from 'react';
import '../css/dialog_box.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import TaskList from '../custom_components/task_list.js';
import TaskSearch from '../custom_components/task_search.js';
import Slide from '@material-ui/core/Slide';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function DialogBox(props) {
  const [title, setTitle] = React.useState();
  const [content, setContent] = React.useState();
  

  const handleClose = () => {
    props.close_dialog();
  };

  useEffect(() => {
    setTitle('Task List');
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
            <TaskSearch />
            {content}
        </DialogContent>
        <DialogActions>
          <Button id="close_button" onClick={handleClose}>
            Close
          </Button>
        </DialogActions>
      </Dialog>
  );
}