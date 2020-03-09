import React from 'react';

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
            className="task__button task__button--edit"
            onClick={() => props.getTask(props.id)}
        >
            edit
        </button>
        <button
            className="task__button task__button--delete"
            onClick={() => props.deleteTask(props.id)}
        >
            X
        </button>
    </div>
);

export default Task;
