import React from 'react';
import { Segment } from 'semantic-ui-react';
import Routes from './Routes';

import '../scss/index.scss';

const isBrowser = () => typeof window !== 'undefined' && window.document;

const App = () => (
  <div>
    {isBrowser() && <Routes />}
  </div>
);

export default App;
