import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

if (typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  window.document.getElementById('app')
) {
  render(
    <App />,
    window.document.getElementById('app'),
  );
}
