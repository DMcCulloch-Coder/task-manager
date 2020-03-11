import React from 'react';
import { NavLink } from 'react-router-dom';
import API from '../utils/API';

const Header = () => {

    const token = localStorage.getItem('Authorization');

    const header = {
        headers: {
            'Authorization': token
        }
    }

    const logout = () => {

        API.logout(header).then(result => {
            console.log(result)
        })

    }

    return (
        <div className="header">
            <h1>Task Manager</h1>
            <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
            <NavLink to="/create" activeClassName="is-active" exact={true}>Add Task</NavLink>
            <NavLink to="/profile" activeClassName="is-active" exact={true}>Profile</NavLink>
            <NavLink to="/signup" activeClassName="is-active" exact={true}>Sign Up</NavLink>
            <NavLink to="/login" activeClassName="is-active" exact={true}>Login</NavLink>

            <button
                className="button button_logout"
                onClick={logout}
            >
                Logout
            </button>
        </div>
    )
}

export default Header;