import React from 'react';
import ReactDOM from 'react-dom';
import Page from '../common/Page.jsx';
import MainContainer from './MainContainer.jsx';
import content from '../content.json';

ReactDOM.render(
  (
    <Page>
      <MainContainer data={content.home} />
    </Page>
  ),
  document.getElementById('app'));
