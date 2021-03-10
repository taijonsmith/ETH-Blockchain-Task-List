import React from 'react';
import '../css/task_list.css';


function TaskList(props) {
  return (
    <div className="task_list">
      {props.tasks}
    </div>
  );
}

export default TaskList;