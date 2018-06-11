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
import { } from '../helpers/string';
import {
  createRights,
  removeRights,
  updateRights,
  modelTitle,
} from '../helpers/models';
import renderer from './renderers';
import Constants from '../constants';
import AuthStore from '../AuthStore';

const styles = {
  container: { margin: 'auto', width: 'fit-content' },
};

class ModelCrud extends React.Component {
  constructor(props) {
    super(props);
    this.handleCreateSubmit = this.handleCreateSubmit.bind(this);
    this.handleUpdateSubmit = this.handleUpdateSubmit.bind(this);
    this.handleDeleteSubmit = this.handleDeleteSubmit.bind(this);
  }

  handleCreateSubmit(item) {
    const { service, onChange } = this.props;
    return new Promise((resolve) => {
      service.create(item).then(result => {
        onChange();
        resolve(result);
      });
    });
  }

  handleUpdateSubmit(data) {
    const { model, service } = this.props;
    const payload = data;
    Object.keys(payload).forEach(k => {
      if (model[k] && model[k].collection) {
        payload[k] = payload[k].map(x => x.id || x);
      }

      if (model[k] && model[k].model) {
        payload[k] = payload[k].id || payload[k];
      }
    });
    return service.update(payload);
  }
  
  handleDeleteSubmit(item) {
    const { onChange, service } = this.props;
    return new Promise((resolve) => {
      service.delete(item).then(result => {
        onChange();
        resolve(result);
      });
    });
  }

  getCreateForm() {
    const { model, modelName } = this.props;
    const allowed = AuthStore.hasAnyOfRights(
      createRights(modelName),
    );

    if (!allowed) return null;

    return (
      <CreateForm
        title={Constants.LABELS.CREATE_FORM_TITLE}
        message={Constants.LABELS.CREATE_FORM_MESSAGE}
        trigger={Constants.BUTTONS.CREATE}
        onSubmit={this.handleCreateSubmit}
        submitText={Constants.BUTTONS.CREATE}
        validate={validateModelRequiredValues(model)}
      />
    );
  }

  getUpdateForm() {
    const { modelName, model } = this.props;
    const allowed = AuthStore.hasAnyOfRights(
      updateRights(modelName),
    );

    if (!allowed) return null;

    return (
      <UpdateForm
        title={Constants.LABELS.UPDATE_FORM_TITLE}
        message={Constants.LABELS.UPDATE_FORM_MESSAGE}
        trigger={Constants.BUTTONS.UPDATE}
        onSubmit={this.handleUpdateSubmit}
        submitText={Constants.BUTTONS.UPDATE}
        validate={validateModelRequiredValues(model)}
      />
    )
  }

  getDeleteForm() {
    const {
      model,
      modelName,
      service,
      onChange
    } = this.props;
    const allowed = AuthStore.hasAnyOfRights(
      removeRights(modelName),
    );

    if (!allowed) return null;

    return (
      <DeleteForm
        title={Constants.LABELS.REMOVE_FORM_TITLE}
        message={Constants.LABELS.REMOVE_FORM_MESSAGE}
        trigger={Constants.BUTTONS.REMOVE}
        onSubmit={this.handleDeleteSubmit}
        submitText={Constants.BUTTONS.REMOVE}
        validate={validateModelDeletion}
      />
    );
  }

  render() {
    const {
      model,
      modelName,
      caption,
      service,
      onChange
    } = this.props;
    return (
      <div style={styles.container}>
        <CRUDTable
          caption={modelTitle(modelName)}
          fetchItems={(payload) => service.fetchItems(payload)}
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
                  tableValueResolver={valueResolver(model, k, modelName)}
                  render={renderer(model, k, modelName)}
                />
              ))
            }
          </Fields>
          {this.getCreateForm()}
          {this.getUpdateForm()}
          {this.getDeleteForm()}
          <Pagination
            fetchTotalOfItems={payload => service.countItems(payload)}
            itemsPerPage={15}
            activePage={1}
          />
        </CRUDTable>
      </div>
    );
  }
}

ModelCrud.defaultProps = {
  onChange: () => {},
};

ModelCrud.propTypes = {};

export default ModelCrud;