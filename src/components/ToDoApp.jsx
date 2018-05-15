import React from 'react';

import Header from './Header';
import TasksContainer from './TasksContainer';

export default class ToDoApp extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			tasks:[]
		};

		this.addTask = this.addTask.bind(this);
		this.removeTask = this.removeTask.bind(this);
		this.removeAllTasks = this.removeAllTasks.bind(this);
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
		if(!task){
			return 'Enter valid value to add item';
		}else if(this.state.tasks.indexOf(task) > -1){
			return 'This option already exists';
		}

		this.setState((prevState)=>({
			tasks: prevState.tasks.concat(task)
		}));
	}

	removeTask(taskToRemove){
		this.setState((prevState)=>({
			tasks: prevState.tasks.filter((task)=> taskToRemove !== task)
		}));
	}

	removeAllTasks(){
		this.setState(()=>({
			tasks: []
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
					removeAllTasks={this.removeAllTasks}
				/>
			</div>
		);
	}
}