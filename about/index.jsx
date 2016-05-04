import './aboutContainer.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Page from '../common/Page.jsx';
import * as Content from '../common/Content.js';

const About = React.createClass({
  render() {
    return (
      <div className="aboutContainer">
        <div className="contentContainer">
          <div className="mercyImage"></div>
          <div>{this.props.text}</div>
        </div>
      </div>
    );
  }
});

function render(content) {
  const {about} = content;

  ReactDOM.render(
    (
      <Page content={content}>
        <About text={about.text}/>
      </Page>
    ),
    document.getElementById('app')
  );
}

Content.get().done(render);
