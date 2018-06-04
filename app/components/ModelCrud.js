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
import {
  inCreationHiddenFields,
  inUpdateHiddenFields,
  keysSorter,
  getType,
  valueResolver,
} from '../helpers/models';
import {} from '../helpers/string';
import renderer from './renderers';

const styles = {
  container: { margin: 'auto', width: 'fit-content' },
};

const ModelCrud = ({ model, caption, service, onChange }) => (
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
              label={k.separateCamel().asTitle()}
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
        onSubmit={task => new Promise((resolve) => {
          service.create(task).then(result => {
            onChange();
            resolve(result);
          })
        })}
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
        onSubmit={task => new Promise((resolve) => {
          service.delete(task).then(result => {
            onChange();
            resolve(result);
          })
        })}
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