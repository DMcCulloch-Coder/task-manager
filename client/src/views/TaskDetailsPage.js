import React from 'react';
import TaskDetails from '../components/TaskDetails';

const TaskDetailPage = (props) => {
    return (
        <TaskDetails id={props.history.location.state.id} />
    )
}

export default TaskDetailPage;