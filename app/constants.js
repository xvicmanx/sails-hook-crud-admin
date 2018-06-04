import { getLabel, getButtonText } from './helpers/config';

const Constants = {
  BUTTONS: {
    CREATE: getButtonText('create', 'Create'),
    UPDATE: getButtonText('update', 'Update'),
    REMOVE: getButtonText('remove', 'Remove'),
    SEE_DETAILS: getButtonText('seeDetails', 'See details')
  },
  LABELS: {
    ACTIONS: getLabel('actions', 'Actions'),
    CREATE_FORM_TITLE: getLabel('createFormTitle', 'Create Item'),
    UPDATE_FORM_TITLE: getLabel('updateFormTitle', 'Update Item'),
    REMOVE_FORM_TITLE: getLabel('removeFormTitle', 'Remove existing Item'),
    CREATE_FORM_MESSAGE: getLabel('createFormMessage', 'Create a new item'),
    UPDATE_FORM_MESSAGE: getLabel('updateFormMessage', 'Update an existing item'),
    REMOVE_FORM_MESSAGE: getLabel('removeFormMessage', 'Are you sure you want to remove the item?'),
  },
};

export default Constants;
