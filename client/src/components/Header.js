import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
    <div className="header">
        <h1>Task Manager</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active" exact={true}>Add Task</NavLink>
        <NavLink to="/profile" activeClassName="is-active" exact={true}>Profile</NavLink>
        <NavLink to="/login" activeClassName="is-active" exact={true}>Login</NavLink>

    </div>

)

export default Header;