import React from 'react';
import PropTypes from 'prop-types';
import { Segment } from 'semantic-ui-react';
import Header from './Header';
import Footer from './Footer';
import NavigationSidebar from './NavigationSidebar';

const styles = {
  segment: {
    width: '95%',
    margin: '0 auto',
    border: 0,
    boxShadow: 'none',
    overflowX: 'auto',
    paddingTop: '1rem',
  },
};

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sidebarVisible: false,
    };
  }

  render() {
    const { sidebarVisible } = this.state;
    const { children } = this.props;
    return (
      <div>
        <NavigationSidebar
          sidebarVisible={sidebarVisible}
        >
          <div className="content-top">
            <Header
              onShowMenuClicked={() => {
                this.setState({
                  sidebarVisible: !sidebarVisible,
                });
              }}
            />
            <Segment basic style={styles.segment}>
              {children}
            </Segment>
          </div>
          <Footer />
        </NavigationSidebar>
      </div>
    );
  }
}

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
