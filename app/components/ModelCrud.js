import React from 'react';
import CRUDTable,
{
  Fields,
  Field,
  CreateForm,
  UpdateForm,
  DeleteForm,
  Pagination
} from 'react-crud-table';
import {
  validateModelRequiredValues,
  validateModelDeletion,
} from '../helpers/validation';
import { omit } from '../helpers/object';
import renderer from './renderers';

const styles = {
  container: { margin: 'auto', width: 'fit-content' },
};

const inCreationHiddenFields = (field) => {
  return [
    'createdAt',
    'updatedAt',
    'id',
  ].indexOf(field) > -1;
};

const inUpdateHiddenFields = (field) => {
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

const keysSorter = (a, b) => weight(a) - weight(b);

const getType = (model, field) => {
  if (
    field === 'createdAt' ||
    field === 'updatedAt'
  ) {
    return 'date';
  }
  return model[field].type;
};

const valueResolver = (model, field) => (item) => {
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
    return JSON.stringify(
      omit(item[field], ['createdAt', 'updatedAt']),
    );
  }

  return item[field];
};

String.prototype.capitalize = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.separateCamel = function() {
  return this.replace(/([a-z])([A-Z])/g, '$1 $2');
};


const ModelCrud = ({ model, caption, service }) => (
  <div style={styles.container}>
    <CRUDTable
      caption={caption}
      fetchItems={payload => service.fetchItems(payload)}
      showQueryBuilder
    >
      <Fields>
        {model &&
          Object.keys(model).sort(keysSorter).map((k) => (
            <Field
              name={k}
              label={k.separateCamel().capitalize()}
              hideInCreateForm={inCreationHiddenFields(k)}
              hideInUpdateForm={inUpdateHiddenFields(k)}
              type={getType(model, k)}
              queryable={!!model[k].type}
              sortable={!!model[k].type}
              tableValueResolver={valueResolver(model, k)}
              render={renderer(model, k)}
            />
          ))
        }
      </Fields>
      <CreateForm
        title="Create Item"
        message="Create a new item"
        trigger="Create"
        onSubmit={task => service.create(task)}
        submitText="Create"
        validate={validateModelRequiredValues(model)}
      />

      <UpdateForm
        title="Update Item"
        message="Update an existing item"
        trigger="Update"
        onSubmit={data => {
          const payload = data;
          Object.keys(payload).forEach(k => {
            if (model[k].collection) {
              payload[k] = payload[k].map(x => x.id);
            }

            if (model[k].model) {
              payload[k] = payload[k].id || payload[k];
            }
          });
          return service.update(payload);
        }}
        submitText="Update"
        validate={validateModelRequiredValues(model)}
      />

      <DeleteForm
        title="Remove an existing item"
        message="Are you sure you want to remove the item?"
        trigger="Remove"
        onSubmit={task => service.delete(task)}
        submitText="Remove"
        validate={validateModelDeletion}
      />
      <Pagination
        fetchTotalOfItems={payload => service.countItems(payload)}
        itemsPerPage={10}
        activePage={1}
      /> 
    </CRUDTable>
  </div>
);

ModelCrud.propTypes = {};

export default ModelCrud;