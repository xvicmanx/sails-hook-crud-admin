import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';
import Constants from '../../constants';
import AuthStore from '../../AuthStore';

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
    <Menu.Item
      header
      content={`${Constants.LABELS.WELCOME} ${AuthStore.getUserName()}!`}
    />
    <Container>
      <Menu.Item
        as={Link}
        icon="home"
        header
        to="/model"
        content={Constants.LABELS.HOME}
      />
      {AuthStore.canAccessPermissionsArea() && (
        <Menu.Item
          as={Link}
          icon="key"
          header
          to="/permissions"
          content={Constants.LABELS.PERMISSIONS}
        />
      )}
      <Menu.Item
        as={Link}
        header
        icon="image"
        to="/assets"
        content={Constants.LABELS.ASSETS}
      />
      <Menu.Item
        as={Link}
        header
        icon="arrow right"
        to="/logout"
        content={Constants.LABELS.LOGOUT}
      />
    </Container>
  </Menu>
);

Header.propTypes = {};

export default Header;