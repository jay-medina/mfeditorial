import React from 'react';
import ReactDOM from 'react-dom';

const Header = React.createClass({
  render() {
    return (
      <header className="header">
        <div className="header--name">{this.props.content.header}</div>
        <div className="header--title">{this.props.content.sub_header}</div>
      </header>
    );
  }
});

export default Header;
