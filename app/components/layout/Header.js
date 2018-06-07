import React from 'react';
import PropTypes from 'prop-types';
import { Container, Menu } from 'semantic-ui-react';
import Constants from '../../constants';

const Header = () => (
  <Menu>
    <Container>
      <Menu.Item
        as='a' header
        href="/administrator"
        content={Constants.LABELS.HOME}
      />
    </Container>
  </Menu>
);

Header.propTypes = {};

export default Header;