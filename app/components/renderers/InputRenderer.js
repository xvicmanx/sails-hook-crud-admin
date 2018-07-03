import React from 'react';
import PropTypes from 'prop-types';
import { maskValue } from '../../helpers/string';
import { getFieldMask } from '../../helpers/models';

export default (modelName) => {
  const InputRenderer = ({ field }) => {
    const mask = getFieldMask(modelName, field.name);
    const value = mask
      ? maskValue(mask, field.value || '')
      : field.value;
    return (
      <input
        {...field}
        value={value}
        onChange={(evt) => {
          const event = evt;
          event.target.value = mask
            ? maskValue(mask, evt.target.value || '')
            : evt.target.value;
          field.onChange(event);
        }}
      />
    );
  };

  InputRenderer.propTypes = {
    field: PropTypes.instanceOf(Object).isRequired,
  };

  return InputRenderer;
};
