import React, { useEffect, useState } from 'react';
import API from '../utils/API';

const TaskDetails = (props) => {

    const [taskState, setTaskState] = useState({
        title: '',
        status: ''
    });

    useEffect(() => {
        const token = localStorage.getItem('Authorization');

        const header = {
            headers: {
                'Authorization': token
            }
        };

        API.getTask(props.id, header).then(result => {
            console.log(result)
            setTaskState({
                title: result.data.task.title,
                status: result.data.task.status
            })
        })
    }, [])

    useEffect(() => {
        document.getElementById('title').value = taskState.title
        document.getElementById('status').value = taskState.status
    }, [taskState])

    return (
        <div>
            <h3>Update Task:</h3>
            <p>Title: <input type='text' id='title'></input></p>
            <p>Status: <input type='text' id='status'></input></p>
            <button>Update Task</button>
        </div>
    )

}

export default TaskDetails;