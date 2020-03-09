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
    <form action="submit">
        <h3 className="submit__title">Create New Task:</h3>
        <label htmlFor="title">Title</label>
        <input type="text" name="title" id="title" />
        <label htmlFor="status">Status</label>
        <input type="text" name="status" id="status" />
        <button className="button submit__button"
            onClick={formSubmit}
        >
            Submit
        </button>
    </form>
);


export default TaskForm;