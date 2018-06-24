import React from 'react';
import PropTypes from 'prop-types';
import loggedInProtected from '../components/high-order/LoggedInProtected';
import ModelsNavigator from '../components/layout/ModelsNavigator';
import LayoutMain from '../components/layout/Main';
import {
  getModels,
  CRUD_MODELS_FILTER,
} from '../helpers/models';


const Main = loggedInProtected(LayoutMain);


const PermissionsScreen = (props) => {
  const models = Object.keys(getModels())
    .filter(CRUD_MODELS_FILTER);
  return (
    <Main>
      <ModelsNavigator
        models={models}
        counts={props.counts}
        area="permissions"
      />
    </Main>
  );
};

PermissionsScreen.propTypes = {
  counts: PropTypes.instanceOf(Object),
};

export default PermissionsScreen;
