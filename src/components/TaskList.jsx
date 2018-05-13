import React from 'react';

import Task from './Task';

const TaskList = (props) => (
    <div>
        {props.tasks.map((task) => {
            return <Task key={task} task={task}/>;
        })}
    </div>
);

export default TaskList;