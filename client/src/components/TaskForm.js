import React from 'react';

const formSubmit = (e) => {
    e.preventDefault();

    let data = {
        title: $('#title').val(),
        status: $('#status').val()
    };

    $('#title').val('');
    $('#status').val('');

    $.ajax({
        url: `/api/task`,
        method: "POST",
        data
    }).then((result) => {
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