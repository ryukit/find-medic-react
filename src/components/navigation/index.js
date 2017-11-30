import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Links = () => {
    return (
        <div className="nav-wrapper">
            <Link to='/' className="brand-logo">Logo</Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
                <li><NavLink exact to='/'>Home</NavLink></li>
                <li><NavLink to='/search'>Search</NavLink></li>
                <li><NavLink to='/contact'>Contact</NavLink></li>
            </ul>
        </div>
    )
}

export default Links;
