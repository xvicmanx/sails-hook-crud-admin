export const validateModelRequiredValues = model => (values) => {
  const errors = {};
  const requiredFields = Object.keys(model)
    .filter(k => model[k].required);
  requiredFields.forEach((k) => {
    if (!values[k]) {
      errors[k] = `Please, provide ${k}.`;
    }
  });
  return errors;
};

export const validateModelDeletion = (values) => {
  const errors = {};
  if (!values.id) {
    errors.id = 'Please, provide id';
  }
  return errors;
};

export const transformAPIErrors = (error) => {
  const errors = {};
  if (error.fields) {
    Object.keys(error.fields)
      .forEach((k) => {
        errors[k] = error.fields[k];
      });
  }
  return errors;
};

export default {
  validateModelRequiredValues,
  validateModelDeletion,
  transformAPIErrors,
};
