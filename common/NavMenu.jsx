import './NavMenu.css';

import React from 'react';
import NavLink from './NavLink.jsx';


const NavMenu = React.createClass({
  render() {
    return (
      <ul className="navMenu">
        <li className="menuItem"><NavLink to="./">Home</NavLink></li>
        <li className="menuItem"><NavLink to="./about">About</NavLink></li>
        <li className="menuItem"><NavLink to="#">Portfolio</NavLink></li>
        <li className="menuItem"><NavLink to="#">Services and Rates</NavLink></li>
        <li className="menuItem"><NavLink to="#">FAQ</NavLink></li>
        <li className="menuItem"><NavLink to="./contact">Contact</NavLink></li>
      </ul>
    );
  }
});

export default NavMenu;
