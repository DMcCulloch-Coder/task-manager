import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => (
    <div className="footer">
        <div className="footer__wrapper">
            <NavLink className="footer__links" to="/" activeClassName="is-active" exact={true}>Dashboard</NavLink>
            <NavLink className="footer__links" to="/create" activeClassName="is-active" exact={true}>Add Task</NavLink>
            <NavLink className="footer__links" to="/profile" activeClassName="is-active" exact={true}>Profile</NavLink>
            <NavLink className="footer__links" to="/signup" activeClassName="is-active" exact={true}>Sign Up</NavLink>
            <NavLink className="footer__links" to="/login" activeClassName="is-active" exact={true}>Login</NavLink>
            <a href="https://github.com/DMcCulloch-Coder" className="footer__credits" target="_blank" alt="Link to David's Github">Created By: David McCulloch</a>
        </div>
    </div>

)

export default Footer;