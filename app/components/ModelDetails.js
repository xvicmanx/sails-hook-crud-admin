import React from 'react';
import Service from '../services/Service';
import ModelCrud from './ModelCrud';
import { getModel } from '../helpers/models';

const styles = {
  container: {
    margin: 'auto',
    width: 'fit-content',
  },
};

const ModelDetails = ({ match }) => (
  <div style={styles.container}>
    <ModelCrud
      key={match.params.modelName}
      model={getModel(match.params.modelName)}
      service={Service(match.params.modelName)}
      caption={match.params.modelName}
    />
  </div>
);

export default ModelDetails;
