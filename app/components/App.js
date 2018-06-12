import React from 'react';
import { Segment } from 'semantic-ui-react';
import { render } from 'react-dom';
import Routes from './Routes';

import '../scss/index.css';

const isBrowser = () => {
  return typeof window !== 'undefined' && window.document;
};

const App = () => (
  <div>{isBrowser() && <Routes />}</div>
);

if (typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  window.document.getElementById('app')
) {
  render(
    <App />,
    window.document.getElementById('app'),
  );
}


export default App;
