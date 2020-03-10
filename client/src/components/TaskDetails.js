import React, { useEffect, useState } from 'react';
import API from '../utils/API';

const TaskDetails = (props) => {
    const token = localStorage.getItem('Authorization');

    const header = {
        headers: {
            'Authorization': token
        }
    };

    const [taskState, setTaskState] = useState({
        title: '',
        status: ''
    });

    useEffect(() => {

        API.getTask(props.id, header).then(result => {
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

    const updateProfile = (e) => {
        e.preventDefault();
        console.log('working');
        const task = {
            title: document.getElementById('title').value,
            status: document.getElementById('status').value
        }
        console.log(task);

        if (taskState !== task) {
            API.updateTask(props.id, task, header).then(result => {
                console.log(result)
            })
        } else {
            console.log('not changed')
        }
    }

    return (
        <div>
            <h3>Update Task:</h3>
            <p>Title: <input type='text' id='title'></input></p>
            <p>Status: <input type='text' id='status'></input></p>
            <button
                className="button button__update"
                onClick={updateProfile}
            >
                Update Task
            </button>
        </div>
    )

}

export default TaskDetails;