import './index.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header.jsx';
import NavMenu from './NavMenu.jsx';

const Body = React.createClass({
  render() {
    return (
      <div>
        <Header />
        <NavMenu />
      </div>
    );
  }
})

ReactDOM.render(<Body />, document.getElementById('app'));
