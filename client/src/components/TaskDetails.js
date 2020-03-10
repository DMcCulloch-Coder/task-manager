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

    const [originalTask, setOriginalTask] = useState({
        title: '',
        status: ''
    });

    useEffect(() => {

        API.getTask(props.id, header).then(result => {
            setTaskState({
                title: result.data.task.title,
                status: result.data.task.status
            })
            setOriginalTask({
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

        const task = {
            title: document.getElementById('title').value,
            status: document.getElementById('status').value
        }

        if (originalTask.title !== task.title || originalTask.status !== task.status) {
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