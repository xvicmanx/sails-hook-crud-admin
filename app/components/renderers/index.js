import DescriptionRenderer from './DescriptionRenderer';
import InputRenderer from './InputRenderer';
import CheckboxRenderer from './CheckboxRenderer';
import EnumSelectRenderer from './EnumSelectRenderer';
import ModelsSelectRenderer from './ModelsSelectRenderer';
import MultipleModelsSelectRenderer from './MultipleModelsSelectRenderer';


const renderer = (model, field) => {
  if (model[field].type === 'boolean') {
    return CheckboxRenderer;
  }

  if (model[field].validations && model[field].validations.isIn) {
    return EnumSelectRenderer(model[field].validations.isIn);
  }

  if (model[field].model) {
    return ModelsSelectRenderer(model[field].model);
  }

  if (model[field].collection) {
    return MultipleModelsSelectRenderer(model[field].collection);
  }

  return InputRenderer;
};


export default renderer;
