import React from 'react';
import {
  HashRouter as Router,
  Route,
  Link,
  withRouter,
} from 'react-router-dom';
import Service from '../services/Service';
import ModelsNavigator from './layout/ModelsNavigator';
import LoginScreen from '../screens/LoginScreen';
import LogoutScreen from '../screens/LogoutScreen';
import ModelDetailsScreen from '../screens/ModelDetailsScreen';
import PermissionsScreen from '../screens/PermissionsScreen';
import ModelsScreen from '../screens/ModelsScreen';
import AssetsScreen from '../screens/AssetsScreen';


const NAVIGATOR_PATHS = [
  '/model',
  '/permissions',
];


class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: {},
    };
  }

  updateCounts() {
    Service().countAllModels()
      .then((counts) => {
        this.setState({ counts });
      });
  }

  componentDidMount() {
    this.updateCounts();
    this.props.history.listen((data) => {
      if (NAVIGATOR_PATHS.indexOf(data.pathname) >= 0) {
        this.updateCounts();
      }
    });
  }

  render() {
    return (
      <div>
        <Route
          exact
          path="/model/:modelName"
          component={ModelDetailsScreen}
        />
        <Route
          exact
          path="/model"
          component={() => (
            <ModelsScreen
              counts={this.state.counts}
            />
          )}
        />
        <Route
          exact
          path="/permissions"
          component={() => (
            <PermissionsScreen
              counts={this.state.counts}
            />
          )}
        />
        <Route
          exact
          path="/assets"
          component={AssetsScreen}
        />
        <Route
          exact
          path="/"
          component={LoginScreen}
        />
        <Route
          exact
          path="/logout"
          component={LogoutScreen}
        />
      </div>
    );
  }
}

const AppRoutes = withRouter(Routes);

export default () => (
  <Router>
    <AppRoutes />
  </Router>
);
