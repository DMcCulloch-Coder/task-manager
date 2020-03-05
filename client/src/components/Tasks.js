import React, { useState, useEffect, useCallback } from 'react';
import Task from './Task';
import API from '../utils/API';

const Tasks = () => {
    const [tasksState, setTasksState] = useState([])

    const deleteTask = useCallback(id => {
        API.deleteTask(id).then(
            (result) => {
                setTasksState((state) => {
                    return state.filter((task) => task.id !== id)
                })
            }
        )
    }, [])

    useEffect(() => {
        const tasks = []

        API.getTasks().then((result) => {
            result.data.forEach(thisTask => {
                tasks.push({
                    title: thisTask.title,
                    status: thisTask.status,
                    id: thisTask._id
                })
            })
            console.log(tasks)
            setTasksState(tasks)
        });
    }, []);

    return (
        <div className='tasks'>
            <h2 className='tasks__title'>Tasks</h2>
            {tasksState.map(thisTask => <Task
                key={thisTask.id}
                id={thisTask.id}
                title={thisTask.title}
                status={thisTask.status}
                deleteTask={deleteTask}
            />)}
            {tasksState.length === 0 && <p>No Tasks Found</p>}
        </div>
    )
}

export default Tasks