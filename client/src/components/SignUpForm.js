import React from 'react';
import API from '../utils/API';

const formSubmit = (e) => {
    e.preventDefault();

    let data = {
        name: $('#name').val(),
        password: $('#password').val(),
        email: $('#email').val()
    };

    if (!data.name || !data.email || !data.password) {
        return console.log('invalid form')
    }

    $('#name').val('');
    $('#password').val('');
    $('#email').val('');

    console.log(data)

    // API.createUser(data).then((result) => {
    //     console.log(result)
    // });

    $.ajax({
        url: '/api/user',
        method: 'POST',
        data
    }).then((result) => {
        console.log(result)
    })
};

const SignUpForm = () => (
    <form action="submit">
        <h3 className="submit__title">Sign Up:</h3>
        <label htmlFor="name">Name </label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email">E-mail </label>
        <input type="text" name="email" id="email" />
        <label htmlFor="password">Password </label>
        <input type="text" name="password" id="password" />
        <button className="button submit__button"
            onClick={formSubmit}
        >
            Submit
        </button>
    </form>
);

export default SignUpForm;
