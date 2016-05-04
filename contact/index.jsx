import React from 'react';
import ReactDOM from 'react-dom';
import Page from '../common/Page.jsx';
import * as Content from '../common/Content.js';

const Contact = React.createClass({
  render() {
    return <div>Contact</div>;
  }
});

function render(content) {
  ReactDOM.render(
    (
      <Page content={content}>
        <Contact />
      </Page>
    ),
    document.getElementById('app'));
}

Content.get().done(render);
