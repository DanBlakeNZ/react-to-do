import React from 'react';

export default class AddTask extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            error: undefined
        };

        this.handleAddTask = this.handleAddTask.bind(this);
    }

    handleAddTask(event){
        event.preventDefault();
        const task = event.target.elements.task.value.trim();
        const error = this.props.addTask(task);

        this.setState(()=>( { error }));

        if(!error){
            event.target.elements.task.value = '';
        }
    }

    render(){
        return(<div className="add-task">
            {this.state.error && <p>{this.state.error}</p>}
            <form onSubmit={this.handleAddTask}>
				<input type="text" name="task" placeholder="Add a task"/>
				<button >Add Task</button>
			</form>
        </div>
        );
    }
}