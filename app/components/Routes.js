import React from 'react';
import PropTypes from 'prop-types';
import {
  HashRouter as Router,
  Route,
  withRouter,
} from 'react-router-dom';
import Service from '../services/Service';
import LoginScreen from '../screens/LoginScreen';
import LogoutScreen from '../screens/LogoutScreen';
import ModelDetailsScreen from '../screens/ModelDetailsScreen';
import PermissionsScreen from '../screens/PermissionsScreen';
import ModelsScreen from '../screens/ModelsScreen';
import AssetsScreen from '../screens/AssetsScreen';
import ViewsScreen from '../screens/ViewsScreen';
import ViewScreen from '../screens/ViewScreen';


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

  componentDidMount() {
    const { history } = this.props;
    this.updateCounts();
    history.listen((data) => {
      if (NAVIGATOR_PATHS.indexOf(data.pathname) >= 0) {
        this.updateCounts();
      }
    });
  }

  updateCounts() {
    Service().countAllModels()
      .then((counts) => {
        this.setState({ counts });
      });
  }

  render() {
    const { counts } = this.state;
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
              counts={counts}
            />
          )}
        />
        <Route
          exact
          path="/views"
          component={ViewsScreen}
        />
        <Route
          exact
          path="/views/:viewName"
          component={ViewScreen}
        />
        <Route
          exact
          path="/permissions"
          component={() => (
            <PermissionsScreen
              counts={counts}
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

Routes.propTypes = {
  history: PropTypes.instanceOf(Object).isRequired,
};

const AppRoutes = withRouter(Routes);

export default () => (
  <Router>
    <AppRoutes />
  </Router>
);
