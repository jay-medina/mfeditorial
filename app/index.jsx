import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import NavMenu from './NavMenu.jsx';
import MainContainer from './MainContainer.jsx';

const Body = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <NavMenu />
        <MainContainer />
      </div>
    );
  }
})

ReactDOM.render(<Body />, document.getElementById('app'));
