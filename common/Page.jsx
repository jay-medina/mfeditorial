import './index.css';

import React from 'react';
import Header from '../common/Header.jsx';
import NavMenu from '../common/NavMenu.jsx';
import Contact from './Contact.jsx';
import Footer from '../common/Footer.jsx';
import content from '../content.json';

const Page = React.createClass({
  render() {
    return (
      <div>
        <Header content={content} />
        <NavMenu />
        {this.props.children}
        <Contact content={content.contact} />
        <Footer />
      </div>
    );
  }
});

export default Page;
