import React from 'react';
import ReactDOM from 'react-dom';
import Page from '../common/Page.jsx';

const Contact = React.createClass({
  render() {
    return <div>Contact</div>;
  }
});

ReactDOM.render(
  (
    <Page>
      <Contact />
    </Page>
  ),
  document.getElementById('app'));
