import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthStore from '../../AuthStore';

const isAllowed = (right) => {
  const rights = AuthStore.getRights();
  const hasGlobalRight = rights.indexOf('*::*') > -1;
  return rights.reduce((result, r) => {
    return result || r === right; 
  }, hasGlobalRight);
};

export default (
  right = '',
  failValue = ''
) => (TargetComponent) => (props) => {

  const allowed = isAllowed(
    props.right || right || ''
  );

  if (!allowed) return failValue;

  return <TargetComponent {...props} />;
};
