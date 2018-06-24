import React from 'react';
import PropTypes from 'prop-types';
import { Sidebar, Segment, Menu } from 'semantic-ui-react';
import NavigationMenu from './NavigationMenu';

const styles = {
  pushable: {
    border: 0,
  },
};

const NavigationSidebar = props => (
  <Sidebar.Pushable
    as={Segment}
    style={styles.pushable}
  >
    <Sidebar
      as={Menu}
      animation="push"
      width="thin"
      visible={props.sidebarVisible}
      icon="labeled"
      vertical
      inverted
    >
      <NavigationMenu />
    </Sidebar>
    <Sidebar.Pusher>
      {props.children}
    </Sidebar.Pusher>
  </Sidebar.Pushable>
);

NavigationSidebar.propTypes = {

};

export default NavigationSidebar;
