import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';
import {
  getModels,
  modelTitle,
  NON_CRUD_MODELS_FILTER,
} from '../../helpers/models';

const ModelsSelect = (props) => {
  const models = Object.keys(getModels())
    .filter(NON_CRUD_MODELS_FILTER);
  const options = models.map(m => ({
    key: m,
    value: m,
    text: modelTitle(m),
  }));
  const { onChange, filter, name } = props;
  return (
    <Form.Select
      {...props}
      options={options.filter(filter)}
      search
      onChange={(e, data) => {
        onChange({
          persist: () => {},
          target: {
            name,
            value: data.value,
          },
        });
      }}
    />
  );
};

ModelsSelect.defaultProps = {
  filter: () => true,
};

ModelsSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  filter: PropTypes.func,
  name: PropTypes.string.isRequired,
};

export default ModelsSelect;
