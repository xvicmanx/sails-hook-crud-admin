import React from 'react'
import { Form } from 'semantic-ui-react';

const types = [
  'file', 'picture',
];

const AssetsTypeSelect = (props) => {
  const options = types.map(m => ({
    key: m,
    value: m,
    text: m,
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

export default AssetsTypeSelect;
