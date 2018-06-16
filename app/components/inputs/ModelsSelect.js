import React from 'react'
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
  return (
    <Form.Select
      {...props}
      options={options}
      search
      onChange={(e, data) => {
        props.onChange({
          persist: () => {},
          target: {
            name: props.name,
            value: data.value,
          },
        });
      }}
    />
  );
};

export default ModelsSelect;
