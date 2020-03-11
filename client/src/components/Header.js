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
            <div className="header__main">
                <h1 className="header__main--title">Task Manager</h1>
                <NavLink className="header__main--nav" to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
                <NavLink className="header__main--nav" to="/create" activeClassName="is-active" exact={true}>Add Task</NavLink>
                <NavLink className="header__main--nav" to="/profile" activeClassName="is-active" exact={true}>Profile</NavLink>
                <NavLink className="header__main--nav" to="/signup" activeClassName="is-active" exact={true}>Sign Up</NavLink>
                <NavLink className="header__main--nav" to="/login" activeClassName="is-active" exact={true}>Login</NavLink>

                <button
                    className="button header__main--logout"
                    onClick={logout}
                >
                    Logout
                </button>
            </div>
        </div>
    )
}

export default Header;