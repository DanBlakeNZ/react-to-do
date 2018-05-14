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
		this.removeTask = this.removeTask.bind(this);
	}

	componentDidMount(){
		try{
			const json = localStorage.getItem('tasks');
			const tasks = JSON.parse(json);

			if(tasks){
				this.setState(()=>({ tasks }));
			}
		}catch(e){
			// error
		}
	}

	componentDidUpdate(prevProps, prevState){
		if(prevState.tasks.length !== this.state.tasks.length){
			const json = JSON.stringify(this.state.tasks);
			localStorage.setItem('tasks', json);
		}
	}



	// App Functions
	addTask(task){
		this.setState((prevState)=>({
			tasks: prevState.tasks.concat(task)
		}));
	}

	removeTask(taskToRemove){
		this.setState((prevState)=>({
			tasks: prevState.tasks.filter((task)=> taskToRemove !== task)
		}));
	}
	
	render(){
		return(
			<div>
				<Header />
				<TasksContainer 
					tasks={this.state.tasks}
					addTask={this.addTask}
					removeTask={this.removeTask}
				/>
			</div>
		);
	}
}