import React from 'react';
import PropTypes from 'prop-types';

const InputRenderer = ({ field }) => <input {...field} />;

InputRenderer.propTypes = {
  field: PropTypes.instanceOf(Object).isRequired,
};

export default InputRenderer;
