import React from 'react';

import AddTask from './AddTask';
import Header from './Header';
import TaskList from './TaskList';

export default class ToDoApp extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			tasks:["task 1", "task 2", "task 3"]
		}
	}
	
	render(){
		return(
			<div>
				<Header />
				<AddTask />
				<TaskList tasks={this.state.tasks}/>
			</div>
		);
	}
}