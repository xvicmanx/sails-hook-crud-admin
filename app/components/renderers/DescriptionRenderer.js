import React from 'react';
import PropTypes from 'prop-types';

const DescriptionRenderer = ({ field }) => <textarea {...field} />;

DescriptionRenderer.propTypes = {
  field: PropTypes.instanceOf(Object).isRequired,
};

export default DescriptionRenderer;
