import React from 'react';
import Routes from './Routes';

import '../scss/index.scss';

const isBrowser = () => typeof window !== 'undefined' && window.document;

const App = () => (
  <div>
    {isBrowser() && <Routes />}
  </div>
);

export default App;
