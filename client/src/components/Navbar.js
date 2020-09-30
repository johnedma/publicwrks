import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () =>
    <nav>
        <ul>
            <NavLink to="/" activeClassName="active">Home</NavLink>
            <NavLink to="/users" activeClassName="active">Users</NavLink>
        </ul>
    </nav>

export default Navbar;
