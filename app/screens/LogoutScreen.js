import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Header } from 'semantic-ui-react';
import { Redirect } from 'react-router-dom';
import AuthStore from '../AuthStore';

class LogoutScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      done: false,
    };
  }
  
  componentDidMount() {
    AuthStore.clear();
    this.setState({ done:  true });
  }

  render() {
    if (this.state.done) {
      return <Redirect to="/" />
    }
    return <Header content="Processing..."/>
  }
}


export default LogoutScreen;
