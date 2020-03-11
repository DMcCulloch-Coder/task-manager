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

    API.createUser(data).then((result) => {
        localStorage.setItem("Authorization", `Bearer ${result.data.token}`)
    });

};

const SignUpForm = () => (
    <form action="submit" className="signup-form">
        <h3 className="submit__title">Sign Up:</h3>
        <p>
            <label htmlFor="name">Name </label>
            <input type="text" name="name" id="name" />
        </p>
        <p>
            <label htmlFor="email">E-mail </label>
            <input type="text" name="email" id="email" />
        </p>
        <p>
            <label htmlFor="password">Password </label>
            <input type="text" name="password" id="password" />
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

export default SignUpForm;
