import React from 'react';
import PropTypes from 'prop-types';

const DateRenderer = ({ field }) => <input type="date" {...field} />;

DateRenderer.propTypes = {
  field: PropTypes.instanceOf(Object).isRequired,
};

export default DateRenderer;
