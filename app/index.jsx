import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import NavMenu from './NavMenu.jsx';
import MainContainer from './MainContainer.jsx';
import Contact from './Contact.jsx';
import Footer from './Footer.jsx';

const Body = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <NavMenu />
        <MainContainer />
        <Contact />
        <Footer />
      </div>
    );
  }
})

ReactDOM.render(<Body />, document.getElementById('app'));
