import React from 'react';
import { NavLink } from 'react-router-dom';
import CartBox from './CartBox';


const Navbar = () =>
    <nav class="navbar is-fixed-top">
        <div className="navbar-brand">
            <NavLink to="/" activeClassName="active"><h1>publicWRKS</h1></NavLink>
            {/* <NavLink to="/users" activeClassName="active">Users</NavLink> */}
        </div>
        <div className="navbar-menu is-active">
            <div className="navbar-end">
                {/* <div className="navbar-item">
                    <NavLink to="/OurMission">The Mission</NavLink>
                    <hr className="navbar-divider" />
                    </div> */}
                <div className="navbar-item">
                    <CartBox />
                </div>
            </div>
        </div>
    </nav>

export default Navbar;
