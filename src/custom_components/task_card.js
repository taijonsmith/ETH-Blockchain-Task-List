import React, { useEffect, useState } from 'react';
import '../css/task_card.css';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


function TaskCard() {

  useEffect(() => {
  }, []);
  

  return (
    <div className="task">
      <Card raised>
        <CardContent>
          <Typography variant="h4" color="textSecondary" gutterBottom>
            Task 1
          </Typography>
          <Typography variant="h6" color="textSecondary">
            Task Date
          </Typography>
          <Typography variant="body1" component="p">
            Task Description
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
            <Button
            className="button"
            variant="contained"
            color="default"
            size="small"
            startIcon={<CloudUploadIcon />}
            >
            Upload File
            </Button>
        </CardActions>
        </Card>
    </div>
  );
}

export default TaskCard;