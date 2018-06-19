import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Menu, Button } from 'semantic-ui-react';
import Constants from '../../constants';
import AuthStore from '../../AuthStore';
import NavigationMenu from './NavigationMenu';

const styles = {
  wrapper: {
    backgroundColor: '#444',
    padding: '1rem',
    marginBottom: '3rem',
    borderRadius: 0,
  },
};

const Header = ({ onShowMenuClicked }) => (
  <Menu
    inverted
    style={styles.wrapper}
  >
    <Menu.Item
      header
      content={`${Constants.LABELS.WELCOME} ${AuthStore.getUserName()}!`}
    />
    <NavigationMenu className="hide-mobile" />
    <Button
      onClick={onShowMenuClicked}
      className="show-mobile menu-button"
      icon="bars"
      color="teal"
    />
  </Menu>
);

Header.propTypes = {};

export default Header;