import React from 'react';
import API from '../utils/API';

const formSubmit = (e) => {
    e.preventDefault();

    const token = localStorage.getItem('Authorization');

    const header = {
        headers: {
            'Authorization': token
        }
    }

    let data = $('#status').val() ? {
        title: $('#title').val(),
        status: $('#status').val()
    } : {
            title: $('#title').val()
        };

    $('#title').val('');
    $('#status').val('');

    API.createTask(data, header).then((result) => {
        console.log(result)
    });
};

const TaskForm = () => (
    <form action="submit" className='task-form'>
        <h2 className='page__title'>Create New Task</h2>
        <p>
            <label htmlFor="title">Title: </label>
            <input type="text" name="title" id="title" />
        </p>
        <p>
            <label htmlFor="status">Status: </label>
            <input type="text" name="status" id="status" />
        </p>
        <p>
            <button className="button submit__button"
                onClick={formSubmit}
            >
                Submit
            </button>
        </p>
    </form>
);


export default TaskForm;