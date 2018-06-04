import React from 'react'
import {
  HashRouter as Router,
  Route,
  Link,
} from 'react-router-dom';
import { Statistic } from 'semantic-ui-react';
import ModelDetails from './ModelDetails';
import { getModels } from '../helpers/models';
import AllModelsNavigator from './AllModelsNavigator';
import Service from '../services/Service';

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
            path="/"
            component={() => (
              <div>
                <AllModelsNavigator counts={parent.state.counts} />
                <hr className="separator" />
                <Route
                  path="/administrator/:modelName"
                  component={({ match }) => (
                    <ModelDetails
                      onChange={parent.handleChange}
                      modelName={match.params.modelName}
                    />
                  )}
                />
              </div>
            )}
          />
        </div>
      </Router>
    );
  }
}


export default Routes;
