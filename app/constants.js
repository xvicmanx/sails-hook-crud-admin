import { getLabel, getButtonText } from './helpers/config';

const CRUD_MODELS = [
  'crudaction',
  'crudresource',
  'crudright',
  'crudgroup',
  'cruduser',
];

const Constants = {
  BUTTONS: {
    CREATE: getButtonText('create', 'Create'),
    UPDATE: getButtonText('update', 'Update'),
    REMOVE: getButtonText('remove', 'Remove'),
    SEE_DETAILS: getButtonText('seeDetails', 'See details')
  },
  LABELS: {
    HOME: getLabel('home', 'Home'),
    PERMISSIONS: getLabel('permissions', 'Permissions'),
    ACTIONS: getLabel('actions', 'Actions'),
    CREATE_FORM_TITLE: getLabel('createFormTitle', 'Create Item'),
    UPDATE_FORM_TITLE: getLabel('updateFormTitle', 'Update Item'),
    REMOVE_FORM_TITLE: getLabel('removeFormTitle', 'Remove existing Item'),
    CREATE_FORM_MESSAGE: getLabel('createFormMessage', 'Create a new item'),
    UPDATE_FORM_MESSAGE: getLabel('updateFormMessage', 'Update an existing item'),
    REMOVE_FORM_MESSAGE: getLabel('removeFormMessage', 'Are you sure you want to remove the item?'),
  },
  CRUD_MODELS,
};

export default Constants;
