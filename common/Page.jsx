import './index.css';

import React from 'react';
import Header from '../common/Header.jsx';
import NavMenu from '../common/NavMenu.jsx';
import Contact from './Contact.jsx';
import Footer from '../common/Footer.jsx';

const Page = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <NavMenu />
        {this.props.children}
        <Contact />
        <Footer />
      </div>
    );
  }
});

export default Page;
