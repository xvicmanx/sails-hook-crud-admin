import React from 'react'
import { Form } from 'semantic-ui-react';
import { getModels, modelTitle } from '../../helpers/models';

const ModelsSelect = (props) => {
  const models = Object.keys(getModels());
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
