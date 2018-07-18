import React from 'react';
import PropTypes from 'prop-types';
import loggedInProtected from '../components/high-order/LoggedInProtected';
import ModelsNavigator from '../components/layout/ModelsNavigator';
import LayoutMain from '../components/layout/Main';
import {
  getModels,
  NON_CRUD_MODELS_FILTER,
  VISIBLE_MODELS_FILTER,
} from '../helpers/models';
import {
  getConfig,
} from '../helpers/config';


const Main = loggedInProtected(LayoutMain);


const ModelsScreen = ({ counts }) => {
  const models = Object.keys(getModels())
    .filter(NON_CRUD_MODELS_FILTER)
    .filter(VISIBLE_MODELS_FILTER(getConfig().models || {}));
  return (
    <Main>
      <ModelsNavigator
        models={models}
        counts={counts}
      />
    </Main>
  );
};

ModelsScreen.propTypes = {
  counts: PropTypes.instanceOf(Object).isRequired,
};

export default ModelsScreen;
