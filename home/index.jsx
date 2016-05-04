import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import Page from '../common/Page.jsx';
import MainContainer from './MainContainer.jsx';
import * as Content from '../common/Content.js';

function render(content) {
  ReactDOM.render(
    (
      <Page content={content}>
        <MainContainer data={content.home} />
      </Page>
    ),
    document.getElementById('app'));
}

Content.get().done(render);

