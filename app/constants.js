import { getLabel, getButtonText } from './helpers/config';

const CRUD_MODELS = [
  'crudaction',
  'crudresource',
  'crudright',
  'crudgroup',
  'cruduser',
  'crudasset',
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
    LOGOUT: getLabel('logout', 'Logout'),
    PERMISSIONS: getLabel('permissions', 'Permissions'),
    ASSETS: getLabel('assets', 'Assets'),
    ACTIONS: getLabel('actions', 'Actions'),
    RESOURCES: getLabel('resources', 'Resources'),
    WELCOME: getLabel('welcome', 'Welcome'),
    CREATE_FORM_TITLE: getLabel('createFormTitle', 'Create Item'),
    UPDATE_FORM_TITLE: getLabel('updateFormTitle', 'Update Item'),
    REMOVE_FORM_TITLE: getLabel('removeFormTitle', 'Remove existing Item'),
    CREATE_FORM_MESSAGE: getLabel('createFormMessage', 'Create a new item'),
    UPDATE_FORM_MESSAGE: getLabel('updateFormMessage', 'Update an existing item'),
    REMOVE_FORM_MESSAGE: getLabel('removeFormMessage', 'Are you sure you want to remove the item?'),
  },
  CRUD_MODELS,
  ASSETS_TYPES: {
    FILE: 'file',
    PICTURE: 'picture',
  },
};

export default Constants;
