import './Footer.css';

import React from 'react';
import ReactDOM from 'react-dom';

const Footer = React.createClass({
  render() {
    return (
      <div className="footer">
        Created By <a target="_blank" href="https://twitter.com/mrfunkycold">@MrFunkyCold</a>
      </div>
    );
  }
});

export default Footer;
