import React from 'react';

const Task = (props) => (
    <div>
        {props.task} <button>Remove Task</button>
    </div>
);

export default Task;