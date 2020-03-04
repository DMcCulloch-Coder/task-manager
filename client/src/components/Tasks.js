import React, { useState, useEffect } from 'react';
import Task from './Task';
import API from '../utils/API';

const Tasks = () => {
    const [tasksState, setTasksState] = useState([])

    useEffect(() => {
        const tasks = []
        
        API.getTasks().then((result) => {
            result.data.forEach(thisTask => {
                tasks.push({
                    title: thisTask.title,
                    status: thisTask.status
                })
            })
            setTasksState(tasks)
        });

    }, []);

    return (
        <div className='tasks'>
            <h2 className='tasks__title'>Tasks</h2>
            {tasksState.length && tasksState.map(thisTask => <Task key={thisTask.title} title={thisTask.title} status={thisTask.status} />)}
        </div>
    )
}

export default Tasks