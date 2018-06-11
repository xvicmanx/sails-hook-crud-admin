import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthStore from '../../AuthStore';

export default (TargetComponent) => (props) => {
  const allowed = !AuthStore.isTokenExpired();

  if (!allowed) return <Redirect  to="/" />;
  
  return <TargetComponent {...props} />;
};
