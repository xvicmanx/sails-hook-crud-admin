import React from 'react';
import PropTypes from 'prop-types';

const PasswordRenderer = ({ field }) => <input type="password" {...field} />;

PasswordRenderer.propTypes = {
  field: PropTypes.instanceOf(Object).isRequired,
};

export default PasswordRenderer;
