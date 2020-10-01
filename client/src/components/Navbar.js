import React from 'react';
import { NavLink } from 'react-router-dom';


const Navbar = () =>
    <nav>
        {/* <ul> */}
        <NavLink to="/" activeClassName="active"><h1>publicWRKS</h1></NavLink>
        {/* <NavLink to="/users" activeClassName="active">Users</NavLink> */}
        {/* </ul> */}
    </nav>

export default Navbar;
