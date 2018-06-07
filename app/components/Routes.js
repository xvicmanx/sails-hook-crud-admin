import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import { Statistic, Segment } from 'semantic-ui-react';
import Header from './layout/Header';
import AllModelsNavigator from './layout/AllModelsNavigator';
import LoginScreen from '../screens/LoginScreen';
import ModelDetailsScreen from '../screens/ModelDetailsScreen';
import { getModels } from '../helpers/models';
import Service from '../services/Service';


const styles = {
  segment: {
    width: '95%',
    margin: '0 auto',
    paddingBottom: '4rem',
    border: 0,
    boxShadow: 'none',
    paddingTop: 0,
  },
};

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
    return (
      <Router>
        <div>
          <Route
            path="/model"
            component={() => (
              <div>
                <Header />
                <Segment style={styles.segment}>
                  <AllModelsNavigator counts={parent.state.counts} />
                  <hr className="separator" />
                  <Route
                    path="/model/:modelName"
                    component={({ match }) => (
                      <ModelDetailsScreen
                        onChange={parent.handleChange}
                        modelName={match.params.modelName}
                      />
                    )}
                  />
                </Segment>
              </div>
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
