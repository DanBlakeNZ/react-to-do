import React from 'react';

import Header from './Header';
import TasksContainer from './TasksContainer';

export default class ToDoApp extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			tasks:['task 1', 'task 2', 'task 3']
		};

		this.addTask = this.addTask.bind(this);
	}

	addTask(task){
		this.setState((prevState)=>({
			tasks: prevState.tasks.concat(task)
		}));
	}
	
	render(){
		return(
			<div>
				<Header />
				<TasksContainer 
					tasks={this.state.tasks}
					addTask={this.addTask}
				/>
			</div>
		);
	}
}