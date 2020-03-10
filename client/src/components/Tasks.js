import React, { useState, useEffect, useCallback } from 'react';
import { Redirect } from 'react-router-dom';
import Task from './Task';
import API from '../utils/API';

const Tasks = () => {
    const [tasksState, setTasksState] = useState([]);
    const [idState, setIdState] = useState();

    const token = localStorage.getItem('Authorization');

    const header = {
        headers: {
            'Authorization': token
        }
    }

    const getTask = useCallback(id => {
        setIdState(id)

    })

    const deleteTask = useCallback(id => {
        API.deleteTask(id, header).then(
            (result) => {
                setTasksState((state) => {
                    return state.filter((task) => task.id !== id)
                })
            }
        )
    }, [])

    useEffect(() => {
        const tasks = []

        API.getTasks(header).then((result) => {
            result.data.forEach(thisTask => {
                tasks.push({
                    title: thisTask.title,
                    status: thisTask.status,
                    id: thisTask._id
                })
            })
            setTasksState(tasks)
        });
    }, []);

    if (idState) {
        return <Redirect to={{
            pathname: "/taskDetails",
            state: {
                id: idState
            }
        }} />
    }

    return (
        <div className='tasks'>
            <h2 className='tasks__title'>Tasks</h2>
            {tasksState.map(thisTask => <Task
                key={thisTask.id}
                id={thisTask.id}
                title={thisTask.title}
                status={thisTask.status}
                getTask={getTask}
                deleteTask={deleteTask}
            />)}
            {tasksState.length === 0 && <p>No Tasks Found</p>}
        </div>
    )
}

export default Tasks