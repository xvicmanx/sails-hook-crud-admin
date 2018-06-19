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
    paddingBottom: '4rem',
    border: 0,
    boxShadow: 'none',
    paddingTop: 0,
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
    return (
      <div>
        <NavigationSidebar
          sidebarVisible={this.state.sidebarVisible}
        >
          <div className="content-top">
            <Header
              onShowMenuClicked={() => {
                this.setState({
                  sidebarVisible: !this.state.sidebarVisible,
                });
              }}
            />
            <Segment basic style={styles.segment}>
              {this.props.children}
            </Segment>
          </div>
          <Footer />
        </NavigationSidebar>
      </div>
    )
  }

}

Main.propTypes = {};

export default Main;
