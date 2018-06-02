export const getModels = () => {
  return typeof window !=='undefined' && window.sailsModels ?
  window.sailsModels : {};
};

export const getModel = (name) => {
  const models = getModels();
  return models[name] ? models[name] : {};
};

export default {
  getModel,
  getModels,
};
