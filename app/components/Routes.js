import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import ModelDetails from './ModelDetails';
import { getModels } from '../helpers/models';

const Routes = () => (
  <Router>
    <div>
      <ul className="models-navigator">
        {Object.keys(getModels()).map(modelName => (
          <li className="models-navigator__link">
            <Link to={`/administrator/${modelName}`}>
              {modelName}
            </Link>
          </li>
        ))}
      </ul>

      <hr className="separator" />
      <Route exact path="/administrator" component={() => null}/>
      <Route path="/administrator/:modelName" component={ModelDetails}/>
    </div>
  </Router>
);

export default Routes;
