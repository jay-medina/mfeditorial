import './portfolio.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Page from '../common/Page.jsx';
import * as Content from '../common/Content.js';

const Portfolio = React.createClass({
  renderProjects() {
    return this.props.projects.map(p => {
      return (
        <div key={p.title}>
          <h4>{p.title}</h4>
          <div>{p.description}</div>
        </div>
      );
    })
  },
  render() {
    return (
      <div className="portfolioContainer">
        <div className="contentContainer">
          <h2 className="title">{this.props.title}</h2>
          <div>{this.renderProjects()}</div>
        </div>
      </div>
    );
  }
});

function render(content) {
  const {portfolio} = content;

  ReactDOM.render(
    (
      <Page content={content}>
        <Portfolio {...portfolio}/>
      </Page>
    ),
    document.getElementById('app')
  );
}

Content.get().done(render);
