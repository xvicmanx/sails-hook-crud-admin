import React from 'react';
import PropTypes from 'prop-types';
import { Label } from 'semantic-ui-react';

const ErrorMessage = ({ field, errors, touched }) => {
  if (!touched[field] || !errors[field]) return null;
  return (
    <Label basic color='red' pointing>
      {errors[field]}
    </Label>
  );
};

ErrorMessage.propTypes = {};

export default ErrorMessage;
