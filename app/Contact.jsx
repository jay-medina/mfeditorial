import './Contact.css';

import React from 'react';
import ReactDOM from 'react-dom';

const Contact = React.createClass({
  render() {
    return (
      <div className="contactInfo">
        <div className="container email">
          <header className="contactInfo__header">Contact me</header>
          <section>If you'd like to get in touch, please email: temp@gmail.com</section>
        </div>
        <div className="container socialMedia">
          <header className="contactInfo__header">Social</header>
          <section>Twitter, Facebook, Instagram, LinkedIn</section>
        </div>
      </div>);
  }
});

export default Contact;
