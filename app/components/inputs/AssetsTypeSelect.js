import React from 'react';
import PropTypes from 'prop-types';
import { Form } from 'semantic-ui-react';

const types = [
  'file',
  'picture',
];

const AssetsTypeSelect = (props) => {
  const { onChange, name } = props;
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

AssetsTypeSelect.propTypes = {
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default AssetsTypeSelect;
