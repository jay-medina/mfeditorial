import React from 'react';
import ReactDOM from 'react-dom';
import Page from '../common/Page.jsx';
import * as Content from '../common/Content.js';

const About = React.createClass({
  render() {
    return <div>About</div>;
  }
});

function render(content) {
  ReactDOM.render(
    (
      <Page content={content}>
        <About />
      </Page>
    ),
    document.getElementById('app'));
}

Content.get().done(render);
