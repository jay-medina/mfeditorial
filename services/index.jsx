import './services.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Page from '../common/Page.jsx';
import * as Content from '../common/Content.js';

const Services = React.createClass({
  renderTypes() {
    return this.props.types.map(p => {
      return (
        <div key={p.title} className="type">
          <h4>{p.title}</h4>
          <div>{p.description}</div>
        </div>
      );
    })
  },
  render() {
    return (
      <div className="serviceContainer">
        <div className="contentContainer">
          <h2 className="title">{this.props.title}</h2>
          <div>{this.renderTypes()}</div>
        </div>
      </div>
    );
  }
});

function render(content) {
  const {services} = content;

  ReactDOM.render(
    (
      <Page content={content}>
        <Services {...services}/>
      </Page>
    ),
    document.getElementById('app')
  );
}

Content.get().done(render);
