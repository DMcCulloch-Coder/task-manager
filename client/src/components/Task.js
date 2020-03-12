import React from 'react';

const Task = (props) => (
    <div className="task">
        <h3 className="task__title">
            Title: {props.title}
        </h3>
        <p className="task__status">
            <strong>Status:</strong> {props.status}
        </p>
        <button
            className="button task__button task__button--edit"
            onClick={() => props.getTask(props.id)}
        >
            edit
        </button>
        <button
            className="button task__button task__button--delete"
            onClick={() => props.deleteTask(props.id)}
        >
            X
        </button>
    </div>
);

export default Task;
