import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';

const ErrorMessage = ({ field, errors, touched }) => {
  if (!touched[field] || !errors[field]) return null;
  return (
    <Label basic color="red" pointing>
      {errors[field]}
    </Label>
  );
};

ErrorMessage.propTypes = {
  field: PropTypes.string.isRequired,
  errors: PropTypes.instanceOf(Object).isRequired,
  touched: PropTypes.instanceOf(Object).isRequired,
};

export default ErrorMessage;
