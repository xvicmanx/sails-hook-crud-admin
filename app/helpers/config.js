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

export const iconForArea = area => (area === 'home' ? 'home' : 'key');

export default {
  getConfig,
  getLabel,
  getButtonText,
  getModelRelatedValue,
  iconForArea,
};
