import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';
import Constants from '../../constants';

const styles = {
  wrapper: {
    backgroundColor: '#444',
    padding: '1rem',
    marginBottom: '3rem',
    borderRadius: 0,
  },
};

const Header = () => (
  <Menu
    inverted
    style={styles.wrapper}
  >
    <Container>
      <Menu.Item
        as={Link}
        header
        to="/model"
        content={Constants.LABELS.HOME}
      />
      <Menu.Item
        as={Link}
        header
        to="/permissions"
        content={Constants.LABELS.PERMISSIONS}
      />
    </Container>
  </Menu>
);

Header.propTypes = {};

export default Header;