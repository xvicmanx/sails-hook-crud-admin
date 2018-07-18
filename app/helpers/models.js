import React from 'react';
import { Popup, Button, Icon } from 'semantic-ui-react';
import JSONTable from 'simple-json-table';
import _ from 'lodash';
import { omit } from './object';
import { getModelRelatedValue } from './config';
import Constants from '../constants';
import './string';

const template = require('lodash.template');

export const getModels = () => (typeof window !== 'undefined' && window.sailsModels
  ? window.sailsModels : {});

export const getModel = (name) => {
  const models = getModels();
  return models[name] ? models[name] : {};
};


export const inCreationHiddenFields = field => [
  'createdAt',
  'updatedAt',
  'id',
].indexOf(field) > -1;

export const inUpdateHiddenFields = field => [
  'createdAt',
  'updatedAt',
  'id',
].indexOf(field) > -1;

const keysWeight = {
  id: -1,
  createdAt: 1,
  updatedAt: 2,
};
const weight = k => keysWeight[k] || 0;

const isADateDefaultField = field => [
  'createdAt',
  'updatedAt',
].indexOf(field) > -1;

export const keysSorter = (a, b) => weight(a) - weight(b);

export const getType = (model, field) => {
  if (isADateDefaultField(field)) return 'date';
  return model[field].type;
};

export const getFieldValueTemplate = (modelName, field) => getModelRelatedValue(
  `${modelName}.fields.${field}.valueTemplate`,
  null,
);

export const getModelValueTemplate = modelName => getModelRelatedValue(
  `${modelName}.valueTemplate`,
  null,
);

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
  return null;
};

export const valueResolver = (model, field, modelName) => (item) => {
  const tpl = getFieldValueTemplate(modelName, field);
  const data = item[field];

  if (tpl && data) {
    const compiler = template(tpl);
    const compiled = compiler({ [field]: data, _ });
    return isHTML(compiled) ? asHTML(compiled) : compiled;
  }

  // if (isADateDefaultField(field)) {
  //   return new Date(+item[field]).toLocaleString();
  // }

  if (model[field].type === 'boolean') {
    return item[field] ? 'true' : 'false';
  }

  if (model[field].model || model[field].collection) {
    return (
      <Popup
        trigger={(
          <Button icon>
            {Constants.BUTTONS.SEE_DETAILS}
          </Button>
)}
        on="click"
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
  const text = getModelRelatedValue(
    `${modelName}.fields.${field}.label`,
    field.separateCamel().asTitle(),
  );
  const icon = getModelRelatedValue(
    `${modelName}.fields.${field}.icon`,
    '',
  );
  return (
    <span>
      {icon && (
        <Icon name={icon} color="teal" />
      )}
      {' '}
      {text}
    </span>
  );
};

export const getFieldMask = (modelName, field) => {
  const mask = getModelRelatedValue(
    `${modelName}.fields.${field}.mask`,
  );
  return mask;
};

export const getFieldRenderer = (modelName, field) => getModelRelatedValue(
  `${modelName}.fields.${field}.renderer`,
  field.separateCamel().asTitle(),
);

export const VISIBLE_MODELS_FILTER = models => model => !_.get(models, `${model}.hide`, false);

export const NON_CRUD_MODELS_FILTER = model => Constants.CRUD_MODELS.indexOf(model) < 0;

export const CRUD_MODELS_FILTER = model => Constants.CRUD_MODELS.indexOf(model) >= 0;

export const modelIcon = (modelName, size = 'small', color = 'white') => {
  const icon = getModelRelatedValue(
    `${modelName}.icon`,
    'file',
  );
  return (
    <span>
      {icon && (
        <Icon
          name={icon}
          color={color}
          size={size}
        />
      )}
    </span>
  );
};

export const modelTitle = (modelName, includeIcon = true) => {
  const text = getModelRelatedValue(
    `${modelName}.label`,
  ) || modelName.asTitle();
  let icon = null;
  if (includeIcon) {
    icon = getModelRelatedValue(
      `${modelName}.icon`,
    );
  }
  return (
    <span>
      {icon && (
        <Icon
          name={icon}
          color="teal"
        />
      )}
      {' '}
      {text}
    </span>
  );
};

export const createRights = modelName => [
  '*::*',
  `*::${modelName}`,
  'create::*',
  `create::${modelName}`,
];

export const removeRights = modelName => [
  '*::*',
  `*::${modelName}`,
  'delete::*',
  `delete::${modelName}`,
];

export const updateRights = modelName => [
  '*::*',
  `*::${modelName}`,
  'update::*',
  `update::${modelName}`,
];

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
  modelTitle,
  createRights,
  updateRights,
  removeRights,
  modelIcon,
  getFieldMask,
};
