import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Container, Menu } from 'semantic-ui-react';
import Constants from '../../constants';
import AuthStore from '../../AuthStore';
import { getViews } from '../../helpers/config';


const NavigationMenu = ({ className }) => (
  <Container className={className}>
    <Menu.Item
      as={Link}
      icon="home"
      header
      to="/model"
      content={Constants.LABELS.HOME}
    />
    {!!Object.keys(getViews()).length && (
      <Menu.Item
        as={Link}
        icon="code"
        header
        to="/views"
        content={Constants.LABELS.VIEWS}
      />
    )}
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
);

NavigationMenu.propTypes = {
  className: PropTypes.string.isRequired,
};

export default NavigationMenu;
