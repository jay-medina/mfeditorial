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
        <ContactContainer className="email" title={this.props.content.email.title}>
          {this.props.content.email.text}
        </ContactContainer>
        <ContactContainer className="socialMedia" title={this.props.content.social.title}>
          {this.props.content.social.text}
        </ContactContainer>
        <ContactContainer className="portfolio" title="Portfolio">
          Book with a naked guy in front. Book with a naked guy in front.
          Book with a naked guy in front. Book with a naked guy in front.
        </ContactContainer>
      </div>);
  }
});

export default Contact;
