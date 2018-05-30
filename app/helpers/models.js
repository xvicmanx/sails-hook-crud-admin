export const getModel = (name) => {
  const models = typeof window !=='undefined' && window.sailsModels ?
  window.sailsModels : {};
  return models[name] ? models[name] : {};
};

export default {
  getModel,
};
