import React from 'react';

export default class AddTask extends React.Component {
    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(props){
        return(
            <div>
                <input type="text" placeholder="Add a task"/>
                <button type="submit">Add Task</button>
            </div>
        )
    }
}