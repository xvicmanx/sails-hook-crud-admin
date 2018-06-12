import React from 'react';
import { Segment } from 'semantic-ui-react';
import Routes from './Routes';

import '../scss/index.css';

const isBrowser = () => {
  return typeof window !== 'undefined' && window.document;
};

const App = () => (
  <div>{isBrowser() && <Routes />}</div>
);

export default App;
