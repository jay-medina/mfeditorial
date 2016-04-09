import './NavMenu.css';

import React from 'react';
import ReactDOM from 'react-dom';

const menuOptions = [
  'Home', 'About', 'Portfolio', 'Services and Rates', 'FAQ', 'Contact'
]
const NavMenu = React.createClass({
  render() {
    return (
      <ul className="navMenu">
        {menuOptions.map(this.renderMenuOption)}
      </ul>
    );
  },
  renderMenuOption(option) {
    return <li key={option} className="menuItem">{option}</li>;
  }
});

export default NavMenu;
