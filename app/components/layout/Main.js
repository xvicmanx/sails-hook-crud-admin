import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import Header from './Header';
import Footer from './Footer';

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

const Main = ({ children }) => (
  <div>
    <div className="content-top">
      <Header />
      <Segment style={styles.segment}>
        {children}
      </Segment>
    </div>
    <Footer />
  </div>
);

Main.propTypes = {};

export default Main;
