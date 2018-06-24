import React from 'react';
import PropTypes from 'prop-types';
import Select from './Select';

const EnumSelectRenderer = items => ({ field }) => (
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

EnumSelectRenderer.propTypes = {};

export default EnumSelectRenderer;
