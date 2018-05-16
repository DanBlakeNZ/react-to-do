import React from 'react';
import ReactDOM from 'react-dom';

import ToDoApp from './components/ToDoApp.jsx';
import './styles/styles.scss';
import 'normalize.css/normalize.css';

ReactDOM.render(<ToDoApp />, document.getElementById('app'));