import { getFieldRenderer } from '../../helpers/models';
import DescriptionRenderer from './DescriptionRenderer';
import InputRenderer from './InputRenderer';
import CheckboxRenderer from './CheckboxRenderer';
import EnumSelectRenderer from './EnumSelectRenderer';
import ModelsSelectRenderer from './ModelsSelectRenderer';
import MultipleModelsSelectRenderer from './MultipleModelsSelectRenderer';
import RightsRenderer from './RightsRenderer';
import PasswordRenderer from './PasswordRenderer';
import PictureRenderer from './PictureRenderer';

const RENDERERS = {
  textarea: model => DescriptionRenderer,
  input: model => InputRenderer,
  password: model => PasswordRenderer,
  checkbox: model => CheckboxRenderer,
  rights: model => RightsRenderer,
  picture: (model, field, modelName) => PictureRenderer(modelName),
  enum: (model, field) => EnumSelectRenderer(model[field].validations.isIn),
  modelSelect: (model, field) => ModelsSelectRenderer(model[field].model),
  modelMultipleSelect: (model, field) => MultipleModelsSelectRenderer(model[field].collection),
};

const renderer = (model, field, modelName) => {
  const rendererType = getFieldRenderer(modelName, field);
  if (rendererType && RENDERERS[rendererType]) {
    return RENDERERS[rendererType](model, field, modelName);
  }

  if (
    modelName === 'crudgroup' &&
    field === 'rights'
  ) {
    return RENDERERS.rights(model);
  }

  if (model[field].type === 'boolean') {
    return RENDERERS.checkbox(model);
  }

  if (
    model[field].validations &&
    model[field].validations.isIn
  ) {
    return RENDERERS.enum(model, field);
  }

  if (model[field].model) {
    return RENDERERS.modelSelect(model, field);
  }

  if (model[field].collection) {
    return RENDERERS.modelMultipleSelect(model, field);
  }

  return RENDERERS.input(model);;
};

export default renderer;
