import React from 'react';

import Task from './Task';

const TaskList = (props) => (
    <div>
        <button onClick={props.removeAllTasks}>
            Remove All Tasks
        </button>
        {(props.tasks.length === 0) && <p>Please add a task to get started</p>}
        {props.tasks.map((task) => {
            return <Task 
                key={task} 
                task={task}
                removeTask={props.removeTask}
            />;
        })}
    </div>
);

export default TaskList;