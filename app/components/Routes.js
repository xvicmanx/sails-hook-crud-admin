import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import queryString from 'query-string';
import {
  getModels,
  NON_CRUD_MODELS_FILTER,
  CRUD_MODELS_FILTER,
} from '../helpers/models';
import Service from '../services/Service';
import ModelsNavigator from './layout/ModelsNavigator';
import LoginScreen from '../screens/LoginScreen';
import ModelDetailsScreen from '../screens/ModelDetailsScreen';
import Main from './layout/Main';
import MainBreadcrumb from './layout/MainBreadcrumb';


class Routes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counts: {},
    };
    this.handleChange = this.handleChange.bind(this);
  }
  
  updateCounts() {
    Service().countAllModels()
      .then(counts => {
        this.setState({ counts });
      });
  }

  componentDidMount() {
    this.updateCounts();
  }

  handleChange() {
    this.updateCounts();
  }

  render() {
    const parent = this;
    const models = Object.keys(getModels());
    const nonCrudModels = models.filter(NON_CRUD_MODELS_FILTER);
    const crudModels = models.filter(CRUD_MODELS_FILTER);
    return (
      <Router>
        <div>
          <Route
            exact
            path="/model/:modelName"
            component={({ match, location }) => {
              const values = queryString.parse(location.search);
              return (
                <Main>
                  <MainBreadcrumb
                    area={values.area || 'home'}
                    modelName={match.params.modelName}
                  />
                  <ModelDetailsScreen
                    onChange={parent.handleChange}
                    modelName={match.params.modelName}
                  />
                </Main>
              );
            }}
          />
          <Route
            exact
            path="/model"
            component={() => (
              <Main>
                <ModelsNavigator
                  models={nonCrudModels}
                  counts={parent.state.counts}
                />
              </Main>
            )}
          />

          <Route
            exact
            path="/permissions"
            component={() => (
              <Main>
                <ModelsNavigator
                  models={crudModels}
                  counts={parent.state.counts}
                  area="permissions"
                />
              </Main>
            )}
          />
          <Route
            exact
            path="/"
            component={LoginScreen}
          />
        </div>
      </Router>
    );
  }
}


export default Routes;
