import React from 'react';
import API from '../utils/API';

const Task = (props) => (
    <div className="task">
        <h3 className="task__title">
            Title: {props.title}
        </h3>
        <p className="task__details">
            These are some more Details!!!
        </p>
        <p className="task__status">
            Status: {props.status}
        </p>
        <button 
            className="task__button" 
            onClick={() => props.deleteTask(props.id)}
        >
            X
        </button>
    </div>
);

export default Task;
