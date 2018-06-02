import React from 'react';
import { renderToString } from 'react-dom/server';
import Page  from './components/layout/Page';
import App from './components/App';

const body = renderToString(<App />);

const title = 'Administrator';

module.exports.renderPage = function(injection) {
  return Page({
    title,
    body,
    injection,
  });
};
