import React from 'react';
import PropTypes from 'prop-types';

const CheckboxRenderer = ({ field }) => (
  <input
    {...field}
    type="checkbox"
    checked={!!field.value}
  />
);

CheckboxRenderer.propTypes = {
  field: PropTypes.instanceOf(Object).isRequired,
};

export default CheckboxRenderer;
