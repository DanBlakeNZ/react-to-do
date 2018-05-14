import React from 'react';

const Task = (props) => (
    <div>
        {props.task} 
        <button onClick={ ()=>{ props.removeTask(props.task); } }>
            Remove Task
        </button>
    </div>
);

export default Task;