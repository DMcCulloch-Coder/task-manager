import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
    <div className="footer">
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active" exact={true}>Add Task</NavLink>
        <NavLink to="/profile" activeClassName="is-active" exact={true}>Profile</NavLink>
        <NavLink to="/signup" activeClassName="is-active" exact={true}>Sign Up</NavLink>
    </div>

)

export default Footer;