import React from 'react';
import PropTypes from 'prop-types';
import AuthStore from '../../AuthStore';

const isAllowed = (right) => {
  const rights = AuthStore.getRights();
  const hasGlobalRight = rights.indexOf('*::*') > -1;
  return rights.reduce((result, r) => result || r === right, hasGlobalRight);
};

export default (
  configRight = '',
  failValue = '',
) => (TargetComponent) => {
  const Wrapper = (props) => {
    const { right } = props;
    const allowed = isAllowed(
      right || configRight || '',
    );

    if (!allowed) return failValue;

    return <TargetComponent {...props} />;
  };

  Wrapper.defaultProps = {
    right: '',
  };

  Wrapper.propTypes = {
    right: PropTypes.string,
  };

  return Wrapper;
};
