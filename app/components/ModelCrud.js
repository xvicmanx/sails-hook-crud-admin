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
  getFieldLabel,
} from '../helpers/models';
import {
  getConfig,
  getLabel,
  getButtonText,
  getModelRelatedValue,
} from '../helpers/config';
import {} from '../helpers/string';
import renderer from './renderers';

const styles = {
  container: { margin: 'auto', width: 'fit-content' },
};

const Constants = {
  BUTTONS: {
    CREATE: getButtonText('create', 'Create'),
    UPDATE: getButtonText('update', 'Update'),
    REMOVE: getButtonText('remove', 'Remove'),
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

const ModelCrud = ({ model, modelName, caption, service, onChange }) => (
  <div style={styles.container}>
    <CRUDTable
      caption={getModelRelatedValue(
        `${modelName}.label` || modelName.asTitle(),
      )}
      fetchItems={payload => service.fetchItems(payload)}
      showQueryBuilder
      actionsLabel={Constants.LABELS.ACTIONS}
    >
      <Fields>
        {model &&
          Object.keys(model).sort(keysSorter).map((k) => (
            <Field
              name={k}
              label={getFieldLabel(model, k)}
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
        title={Constants.LABELS.CREATE_FORM_TITLE}
        message={Constants.LABELS.CREATE_FORM_MESSAGE}
        trigger={Constants.BUTTONS.CREATE}
        onSubmit={task => new Promise((resolve) => {
          service.create(task).then(result => {
            onChange();
            resolve(result);
          })
        })}
        submitText={Constants.BUTTONS.CREATE}
        validate={validateModelRequiredValues(model)}
      />

      <UpdateForm
        title={Constants.LABELS.UPDATE_FORM_TITLE}
        message={Constants.LABELS.UPDATE_FORM_MESSAGE}
        trigger={Constants.BUTTONS.UPDATE}
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
        submitText={Constants.BUTTONS.UPDATE}
        validate={validateModelRequiredValues(model)}
      />

      <DeleteForm
        title={Constants.LABELS.REMOVE_FORM_TITLE}
        message={Constants.LABELS.REMOVE_FORM_MESSAGE}
        trigger={Constants.BUTTONS.REMOVE}
        onSubmit={task => new Promise((resolve) => {
          service.delete(task).then(result => {
            onChange();
            resolve(result);
          })
        })}
        submitText={Constants.BUTTONS.REMOVE}
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