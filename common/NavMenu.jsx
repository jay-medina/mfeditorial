import './NavMenu.css';

import React from 'react';
import NavLink from './NavLink.jsx';


const NavMenu = React.createClass({
  render() {
    return (
      <ul className="navMenu">
        <li className="menuItem"><NavLink to="">Home</NavLink></li>
        <li className="menuItem"><NavLink to="about">About</NavLink></li>
        <li className="menuItem"><NavLink to="portfolio">Portfolio</NavLink></li>
        <li className="menuItem"><NavLink to="services">Services</NavLink></li>
      </ul>
    );
  }
});

export default NavMenu;
