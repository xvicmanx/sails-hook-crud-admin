import React from 'react';
import { renderToString } from 'react-dom/server';
import Page  from './components/layout/Page';
import Example from './components/Example';

const body = renderToString(<Example />);

const title = 'Hello my friend';

module.exports.renderPage = function(injection) {
  return Page({
    title,
    body,
    injection,
  });
};
