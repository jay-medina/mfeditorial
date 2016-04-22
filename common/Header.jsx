import React from 'react';
import ReactDOM from 'react-dom';

const Header = React.createClass({
  render() {
    return (
      <header className="header">
        <div className="header--name">Mercedes Fernandez</div>
        <div className="header--title">Freelance editor</div>
      </header>
    );
  }
});

export default Header;
