import './MainContainer.css';

import React from 'react';
import ReactDOM from 'react-dom';

const MainContainer = React.createClass({
  render() {
    return (
      <div className="mainContainer">
        <div className="shortIntro">
          <div className="mercyImage"></div>
          <div className="shortIntro__content">
            {this.props.data.short_intro}
          </div>
        </div>
      </div>);
  }
});

export default MainContainer;
