import { queryValue } from './object';

export const getConfig = () => (typeof window !== 'undefined' && window.crudAdminConfig
  ? window.crudAdminConfig : {});

export const getLabel = (prop, defaultValue) => {
  const config = getConfig();
  return queryValue(
    config,
    `general.labels.${prop}`,
    defaultValue,
  );
};

export const getViews = () => {
  const config = getConfig();
  return queryValue(
    config,
    'views',
    [],
  );
};

export const getModelRelatedValue = (query, defaultValue) => {
  const config = getConfig();
  return queryValue(
    config,
    `models.${query}`,
    defaultValue,
  );
};

export const getButtonText = (button, defaultValue) => {
  const config = getConfig();
  return queryValue(
    config,
    `general.buttons.${button}`,
    defaultValue,
  );
};

export const iconForArea = (area) => {
  switch (area) {
    case 'home': return 'home';
    case 'permissions': return 'key';
    case 'views': return 'code';
    default: return 'permissions';
  }
};

export default {
  getConfig,
  getLabel,
  getButtonText,
  getModelRelatedValue,
  iconForArea,
  getViews,
};
