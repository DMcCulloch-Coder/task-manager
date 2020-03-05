import React from 'react';

const Task = (props) => (
    <div className="task" id={props.id}>
        <h3 className="task__title">
            Title: {props.title}
        </h3>
        <p className="task__details">
            These are some more Details!!!
        </p>
        <p className="task__status">
            Status: {props.status}
        </p>
    </div>
);

export default Task;
