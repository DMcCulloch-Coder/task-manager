import React from 'react';
import API from '../utils/API';

const formSubmit = (e) => {
    e.preventDefault();

    let data = {
        password: $('#password').val(),
        email: $('#email').val()
    };

    if (!data.email || !data.password) {
        return console.log('invalid form')
    }

    $('#password').val('');
    $('#email').val('');

    console.log(data)

    API.userLogin(data).then((result) => {
        localStorage.setItem("Authorization", `Bearer ${result.data.token}`)
    });

};

const LoginForm = () => (
    <form action="submit">
        <h3 className="submit__title">Login:</h3>
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

export default LoginForm;
