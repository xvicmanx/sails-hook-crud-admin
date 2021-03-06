import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Segment, Menu } from 'semantic-ui-react';
import NavigationMenu from './NavigationMenu';

const styles = {
  pushable: { border: 0 },
};

const NavigationSidebar = ({ sidebarVisible, children }) => (
  <Sidebar.Pushable
    as={Segment}
    style={styles.pushable}
  >
    <Sidebar
      as={Menu}
      animation="push"
      width="thin"
      visible={sidebarVisible}
      icon="labeled"
      vertical
      inverted
    >
      <NavigationMenu />
    </Sidebar>
    <Sidebar.Pusher>
      {children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

NavigationSidebar.propTypes = {
  children: PropTypes.node.isRequired,
  sidebarVisible: PropTypes.bool.isRequired,
};

export default NavigationSidebar;
