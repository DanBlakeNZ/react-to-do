import React from 'react';

export default class AddTask extends React.Component {
    constructor(props){
        super(props);

        this.state = {

        };

        this.handleAddTask = this.handleAddTask.bind(this);
    }

    handleAddTask(event){
        event.preventDefault();
        const task = event.target.elements.task.value.trim();
        this.props.addTask(task);
    }

    render(){
        return(
            <form onSubmit={this.handleAddTask}>
				<input type="text" name="task" placeholder="Add a task"/>
				<button >Add Task</button>
			</form>
        );
    }
}