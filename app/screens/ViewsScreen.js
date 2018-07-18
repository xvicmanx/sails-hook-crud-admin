import React from 'react';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Header, Icon } from 'semantic-ui-react';
import LayoutMain from '../components/layout/Main';
import loggedInProtected from '../components/high-order/LoggedInProtected';
import { getViews } from '../helpers/config';

const Main = loggedInProtected(LayoutMain);

const styles = {
  container: {
    margin: 'auto',
    width: 'fit-content',
  },
};

const views = getViews();

const ViewScreen = () => (
  <Main>
    <Header as="h1">
      <Icon
        name="code"
        color="teal"
      />
      {' '}
      Views
    </Header>
    <div style={styles.container}>
      {Object.keys(views)
        .filter(k => !views[k].hide)
        .map(key => (
          <Link
            className="views-list-item"
            to={`/views/${key}`}
            key={key}
          >
            <div className="views-list-item__value">
              <Icon
                name={views[key].icon}
              />
            </div>
            <div className="views-list-item__label">
              {key}
            </div>
          </Link>
        ))}
    </div>
  </Main>
);


ViewScreen.propTypes = {
};

export default ViewScreen;
