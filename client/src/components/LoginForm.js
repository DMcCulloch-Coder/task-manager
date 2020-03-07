import React from 'react';
import API from '../utils/API';

const userFormSubmit = (e) => {
    e.preventDefault();

    let data = {
        name: $('#name').val(),
        password: $('#password').val(),
        email: $('#email').val()
    };

    if (!data.name || !data.email || !data.password) {
        console.log('invalid form')
    }

    $('#name').val('');
    $('#password').val('');
    $('#email').val('');

    console.log(data)

    API.createUser(data).then((result) => {
        console.log(result)
    });
};

const LoginForm = () => (
    <form action="submit">
        <h3 className="submit__title">Login:</h3>
        <label htmlFor="name">Name </label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">E-mail </label>
        <input type="text" name="email" id="email" />
        <label htmlFor="password">Password </label>
        <input type="text" name="password" id="password" />
        <button className="button submit__button"
            onClick={userFormSubmit}
        >
            Submit
        </button>
    </form>
);

export default LoginForm;
