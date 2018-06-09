import React from 'react';
import { Message } from 'semantic-ui-react';
import Service from '../services/Service';
import ModelCrud from '../components/ModelCrud';
import { getModel, } from '../helpers/models';
import rightProtected from '../components/high-order/RightProtected';

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

const ModelDetailsScreen = ({ modelName, onChange }) => (
  <div style={styles.container}>
    <ProtectedModelCrud
      right={`read::${modelName}`}
      key={modelName}
      model={getModel(modelName)}
      service={Service(modelName)}
      modelName={modelName}
      onChange={onChange}
    />
  </div>
);

export default ModelDetailsScreen;
