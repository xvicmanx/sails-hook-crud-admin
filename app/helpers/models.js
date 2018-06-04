import React from 'react';
import { Popup, Button } from 'semantic-ui-react';
import JSONTable from 'simple-json-table';
import { omit } from './object';

export const getModels = () => {
  return typeof window !== 'undefined' && window.sailsModels ?
  window.sailsModels : {};
};

export const getModel = (name) => {
  const models = getModels();
  return models[name] ? models[name] : {};
};


export const inCreationHiddenFields = (field) => {
  return [
    'createdAt',
    'updatedAt',
    'id',
  ].indexOf(field) > -1;
};

export const inUpdateHiddenFields = (field) => {
  return [
    'createdAt',
    'updatedAt',
    'id',
  ].indexOf(field) > -1;
};

const keysWeight = {
  id: -1,
  createdAt: 1,
  updatedAt: 2,
};
const weight = k => keysWeight[k] || 0;

export const keysSorter = (a, b) => weight(a) - weight(b);

export const getType = (model, field) => {
  if (
    field === 'createdAt' ||
    field === 'updatedAt'
  ) {
    return 'date';
  }
  return model[field].type;
};

export const valueResolver = (model, field) => (item) => {
  if (
    field === 'createdAt' ||
    field === 'updatedAt'
  ) {
    return new Date(+item[field]).toLocaleString();
  }

  if (model[field].type === 'boolean') {
    return item[field] ? 'true' : 'false';
  }

  if (model[field].model || model[field].collection) {
    return (
      <Popup
        trigger={<Button icon>See details</Button>}
        on='click'
      >
        <JSONTable
          source={omit(item[field], ['createdAt', 'updatedAt'])}
        />
      </Popup>
    ); 
  }

  return item[field];
};

export default {
  getModel,
  getModels,
  inCreationHiddenFields,
  inUpdateHiddenFields,
  keysSorter,
  getType,
  valueResolver,
};
