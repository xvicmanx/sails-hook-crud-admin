import React from 'react';
const template = require('lodash.template');
import { Popup, Button } from 'semantic-ui-react';
import JSONTable from 'simple-json-table';
import _ from 'lodash';
import { omit, queryValue } from './object';
import { getLabel, getModelRelatedValue } from './config';
import Constants from '../constants';
import './string';

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

const isADateDefaultField = (field) => {
  return [
    'createdAt',
    'updatedAt',
  ].indexOf(field) > -1;
};

export const keysSorter = (a, b) => weight(a) - weight(b);

export const getType = (model, field) => {
  if (isADateDefaultField(field)) return 'date';
  return model[field].type;
};

export const getFieldValueTemplate = (modelName, field) => {
  return getModelRelatedValue(
    `${modelName}.fields.${field}.valueTemplate`,
    null
  );
};

export const getModelValueTemplate = (modelName) => {
  return getModelRelatedValue(
    `${modelName}.valueTemplate`,
    null
  );
};

const isHTML = text => /<(\/)?\w+\s*>/.test(text);
const asHTML = (text) => {
  const value = { __html: text };
  return (
    <div dangerouslySetInnerHTML={value} />
  );
};

export const getModelValue = (modelName, item) => {
  const tpl = getModelValueTemplate(modelName);
  if (tpl) {
    const compiler = template(tpl);
    return compiler({ [modelName]: item, _ });
  }
};

export const valueResolver = (model, field, modelName) => (item) => {
  const tpl = getFieldValueTemplate(modelName, field);
  const data = item[field];

  if (tpl && data) {
    const compiler = template(tpl);
    const compiled = compiler({ [field]: data, _ });
    return isHTML(compiled) ? asHTML(compiled) : compiled;
  }
  
  if (isADateDefaultField(field)) {
    return new Date(+item[field]).toLocaleString();
  }

  if (model[field].type === 'boolean') {
    return item[field] ? 'true' : 'false';
  }

  if (model[field].model || model[field].collection) {
    return (
      <Popup
        trigger={<Button icon>{Constants.BUTTONS.SEE_DETAILS}</Button>}
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

export const getFieldLabel = (modelName, field) => {
  return getModelRelatedValue(
    `${modelName}.fields.${field}.label`,
    field.separateCamel().asTitle()
  );
};

export const getFieldRenderer = (modelName, field) => {
  return getModelRelatedValue(
    `${modelName}.fields.${field}.renderer`,
    field.separateCamel().asTitle()
  );
};

const CRUD_MODELS = [
  'crudaction',
  'crudresource',
  'crudright',
  'crudgroup',
  'cruduser',
];

export const NON_CRUD_MODELS_FILTER = (model) => {
  return CRUD_MODELS.indexOf(model) < 0
};

export const CRUD_MODELS_FILTER = (model) => {
  return CRUD_MODELS.indexOf(model) >= 0;
};

export default {
  getModel,
  getModels,
  inCreationHiddenFields,
  inUpdateHiddenFields,
  keysSorter,
  getType,
  valueResolver,
  getFieldLabel,
  getModelValue,
  getFieldRenderer,
  NON_CRUD_MODELS_FILTER,
  CRUD_MODELS_FILTER,
};
