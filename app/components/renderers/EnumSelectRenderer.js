import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';

const EnumSelectRenderer = (items) => {
  const EnumSelect = ({ field }) => (
    <Select
      {...field}
      options={items.map(x => (
        {
          value: x,
          key: x,
          text: x,
        }
      ))}
    />
  );
  EnumSelect.propTypes = {
    field: PropTypes.instanceOf(Object).isRequired,
  };
  return EnumSelect;
};

export default EnumSelectRenderer;
