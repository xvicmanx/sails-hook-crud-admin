import React from 'react';
import { render } from 'react-dom';
import CRUDTable,
{
  Fields,
  Field,
  CreateForm,
  UpdateForm,
  DeleteForm,
  Pagination
} from 'react-crud-table';

import Service from '../services/Service';
import {
  validateModelRequiredValues,
  validateModelDeletion,
} from '../helpers/validation';

// Component's Base CSS
import './index.css';

const DescriptionRenderer = ({ field }) => <textarea {...field} />;

const service = Service('foo');

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

const getModel = (name) => {
  const models = typeof window !=='undefined' && window.sailsModels ?
  window.sailsModels : {};
  return models[name] ? models[name] : {};
};

const Example = ({ model }) => (
  <div style={styles.container}>
    <CRUDTable
      caption="Foos"
      fetchItems={payload => service.fetchItems(payload)}
    >
      <Fields>
        {model &&
          Object.keys(model).map((k) => (
            <Field
              name={k}
              label={k}
              hideInCreateForm={inCreationHiddenFields(k)}
              hideInUpdateForm={inUpdateHiddenFields(k)}
            />
          ))
        }
      </Fields>
      <CreateForm
        title="Creation"
        message="Create!"
        trigger="Create"
        onSubmit={task => service.create(task)}
        submitText="Create"
        validate={validateModelRequiredValues(model)}
      />

      <UpdateForm
        title="Update Process"
        message="Update"
        trigger="Update"
        onSubmit={data => service.update(data)}
        submitText="Update"
        validate={validateModelRequiredValues(model)}
      />

      <DeleteForm
        title="Delete Process"
        message="Are you sure you want to delete the item?"
        trigger="Delete"
        onSubmit={task => service.delete(task)}
        submitText="Delete"
        validate={validateModelDeletion}
      />
      <Pagination totalOfItems={10} /> 
    </CRUDTable>
  </div>
);

Example.propTypes = {};

if (typeof window !== 'undefined' &&
  typeof window.document !== 'undefined' &&
  window.document.getElementById('app')
) {
  render(<Example model={getModel('foo')} />, window.document.getElementById('app'));
}

export default Example;