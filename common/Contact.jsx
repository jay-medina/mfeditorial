import './Contact.css';

import React from 'react';

const ContactContainer = React.createClass({
  render() {
    const {title, children} = this.props;

    return (
    <div className={this._getClassName()}>
      <header className="contactInfo__header">{title}</header>
      <section>{children}</section>
    </div>
    );
  },
  _getClassName() {
    return "container " + this.props.className;
  }
});

const Contact = React.createClass({
  render() {
    return (
      <div className="contactInfo">
        <ContactContainer className="email" title="Contact Me">
          If you'd like to get in touch, please email: temp@gmail.com
        </ContactContainer>
        <ContactContainer className="socialMedia" title="Social">
          Twitter, Facebook, Instagram, LinkedIn
        </ContactContainer>
        <ContactContainer className="portfolio" title="Portfolio">
          Book with a naked guy in front. Book with a naked guy in front.
          Book with a naked guy in front. Book with a naked guy in front.
        </ContactContainer>
      </div>);
  }
});

export default Contact;
