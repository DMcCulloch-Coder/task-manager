import React from 'react';

const Task = (props) => (
    <div className="task">
        <h3 className="task__title">
            Title: {props.title}
        </h3>
        <p className="task__details">
            Go to the supermarket!
        </p>
        <p className="task__status">
            Status: {props.status}
        </p>
    </div>
);

export default Task;
