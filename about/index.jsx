import React from 'react';
import ReactDOM from 'react-dom';
import Page from '../common/Page.jsx';

const About = React.createClass({
  render() {
    return <div>About</div>;
  }
});

ReactDOM.render(
  (
    <Page>
      <About />
    </Page>
  ),
  document.getElementById('app'));
