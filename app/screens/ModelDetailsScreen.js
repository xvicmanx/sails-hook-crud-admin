import React from 'react';
import Service from '../services/Service';
import ModelCrud from '../components/ModelCrud';
import { getModel, } from '../helpers/models';

const styles = {
  container: {
    margin: 'auto',
    width: 'fit-content',
  },
};

const ModelDetailsScreen = ({ modelName, onChange }) => (
  <div style={styles.container}>
    <ModelCrud
      key={modelName}
      model={getModel(modelName)}
      service={Service(modelName)}
      modelName={modelName}
      onChange={onChange}
    />
  </div>
);

export default ModelDetailsScreen;
