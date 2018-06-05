import React from 'react';
import { Container, Menu, Segment } from 'semantic-ui-react';
import { render } from 'react-dom';
import Routes from './Routes';
import Constants from '../constants';

import './index.css';

const styles = {
  segment: {
    width: '95%',
    margin: '0 auto',
    paddingBottom: '4rem',
    border: 0,
    boxShadow: 'none',
    paddingTop: 0,
  },
};

const isBrowser = () => {
  return typeof window !== 'undefined' && window.document;
};

const App = () => (
  <div>
    <Menu>
      <Container>
        <Menu.Item
          as='a' header
          href="/administrator"
          content={Constants.LABELS.HOME}
        />
      </Container>
    </Menu>
    <Segment
      as="div"
      style={styles.segment}
    >
      {isBrowser() && <Routes />}
    </Segment>
  </div>
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
