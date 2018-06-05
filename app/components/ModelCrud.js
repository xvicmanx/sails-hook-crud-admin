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
  getModelRelatedValue,
} from '../helpers/config';
import {} from '../helpers/string';
import renderer from './renderers';
import Constants from '../constants';

const styles = {
  container: { margin: 'auto', width: 'fit-content' },
};

const ModelCrud = ({ model, modelName, caption, service, onChange }) => (
  <div style={styles.container}>
    <CRUDTable
      caption={getModelRelatedValue(
        `${modelName}.label`,
      ) || modelName.asTitle() }
      fetchItems={payload => service.fetchItems(payload)}
      showQueryBuilder
      actionsLabel={Constants.LABELS.ACTIONS}
    >
      <Fields>
        {model &&
          Object.keys(model).sort(keysSorter).map((k) => (
            <Field
              name={k}
              label={getFieldLabel(modelName, k)}
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
              payload[k] = payload[k].map(x => x.id || x);
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