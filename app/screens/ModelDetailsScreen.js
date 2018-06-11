import React from 'react';
import { Message } from 'semantic-ui-react';
import queryString from 'query-string';
import Service from '../services/Service';
import ModelCrud from '../components/ModelCrud';
import { getModel, } from '../helpers/models';
import LayoutMain from '../components/layout/Main';
import MainBreadcrumb from '../components/layout/MainBreadcrumb';
import rightProtected from '../components/high-order/RightProtected';
import loggedInProtected from '../components/high-order/LoggedInProtected';

const Main = loggedInProtected(LayoutMain);

const ProtectedModelCrud = rightProtected(
  null,
  <Message
    size="huge"
    visible
    error
    content="You do not have permission to view"
  />
)(ModelCrud);

const styles = {
  container: {
    margin: 'auto',
    width: 'fit-content',
  },
};

const ModelDetailsScreen = ({ match, location }) => {
  const { modelName } = match.params;
  const values = queryString.parse(location.search);
  return (
    <Main>
      <MainBreadcrumb
        area={values.area || 'home'}
        modelName={modelName}
      />
      <div style={styles.container}>
        <ProtectedModelCrud
          right={`read::${modelName}`}
          key={modelName}
          model={getModel(modelName)}
          service={Service(modelName)}
          modelName={modelName}
        />
      </div>
    </Main>
  );
};


export default ModelDetailsScreen;
