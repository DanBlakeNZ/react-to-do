import React from 'react';

import AddTask from './AddTask';
import TaskList from './TaskList';

const TasksContainer = (props) => (
    <div>
        <AddTask addTask={ props.addTask } />
        <TaskList 
            tasks={props.tasks}
            removeTask={props.removeTask}
            removeAllTasks={props.removeAllTasks} />
    </div>
);

export default TasksContainer;