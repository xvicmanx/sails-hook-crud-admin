import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'semantic-ui-react';
import CRUDTable,
{
  Fields,
  Field,
  CreateForm,
  UpdateForm,
  DeleteForm,
  Pagination,
} from 'react-crud-table';
import _ from 'lodash';
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
  createRights,
  removeRights,
  updateRights,
  modelTitle,
} from '../helpers/models';
import '../helpers/string';
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

  getCreateForm() {
    const { model, modelName } = this.props;
    const allowed = AuthStore.hasAnyOfRights(
      createRights(modelName),
    );

    if (!allowed) return null;

    return (
      <CreateForm
        title={(
          <div>
            <Icon name="plus" color="teal" />
            {' '}
            {Constants.LABELS.CREATE_FORM_TITLE}
          </div>
)}
        message={Constants.LABELS.CREATE_FORM_MESSAGE}
        trigger={(
          <div>
            <Icon name="plus" />
            {' '}
            {Constants.BUTTONS.CREATE}
          </div>
)}
        onSubmit={this.handleCreateSubmit}
        submitText={(
          <div>
            <Icon name="plus" />
            {' '}
            {Constants.BUTTONS.CREATE}
          </div>
)}
        validate={validateModelRequiredValues(model)}
        generalErrorMessage={Constants.LABELS.GENERAL_ERROR_MESSAGE}
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
        title={(
          <div>
            <Icon name="pencil" color="teal" />
            {' '}
            {Constants.LABELS.UPDATE_FORM_TITLE}
          </div>
)}
        message={Constants.LABELS.UPDATE_FORM_MESSAGE}
        trigger={(
          <div>
            <Icon name="pencil" />
            {' '}
            {Constants.BUTTONS.UPDATE}
          </div>
)}
        onSubmit={this.handleUpdateSubmit}
        submitText={(
          <div>
            <Icon name="pencil" />
            {' '}
            {Constants.BUTTONS.UPDATE}
          </div>
)}
        validate={validateModelRequiredValues(model)}
        generalErrorMessage={Constants.LABELS.GENERAL_ERROR_MESSAGE}
      />
    );
  }

  getDeleteForm() {
    const { modelName } = this.props;
    const allowed = AuthStore.hasAnyOfRights(
      removeRights(modelName),
    );

    if (!allowed) return null;

    return (
      <DeleteForm
        title={(
          <div>
            <Icon name="close" color="red" />
            {' '}
            {Constants.LABELS.REMOVE_FORM_TITLE}
          </div>
)}
        message={Constants.LABELS.REMOVE_FORM_MESSAGE}
        trigger={(
          <div>
            <Icon name="close" />
            {' '}
            {Constants.BUTTONS.REMOVE}
          </div>
)}
        onSubmit={this.handleDeleteSubmit}
        submitText={(
          <div>
            <Icon name="close" />
            {' '}
            {Constants.BUTTONS.REMOVE}
          </div>
)}
        validate={validateModelDeletion}
        generalErrorMessage={Constants.LABELS.GENERAL_ERROR_MESSAGE}
      />
    );
  }

  handleCreateSubmit(item) {
    const { service, onChange } = this.props;
    return new Promise((resolve) => {
      service.create(item).then((result) => {
        onChange();
        resolve(result);
      });
    });
  }

  handleUpdateSubmit(data) {
    const { model, service } = this.props;
    const payload = data;
    Object.keys(payload).forEach((k) => {
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
      service.delete(item).then((result) => {
        onChange();
        resolve(result);
      });
    });
  }

  render() {
    const {
      model,
      modelName,
      service,
    } = this.props;
    return (
      <div style={styles.container}>
        <CRUDTable
          caption={modelTitle(modelName)}
          fetchItems={(data) => {
            const payload = Object.assign({}, data);
            payload.queryRules = data.queryRules
              .map(i => _.omit(i, ['label']));
            return service.fetchItems(payload);
          }}
          showQueryBuilder
          actionsLabel={(
            <div>
              <Icon name="wrench" color="teal" />
              {' '}
              {Constants.LABELS.ACTIONS}
            </div>
          )}
        >
          <Fields>
            {model
              && Object.keys(model).sort(keysSorter).map(k => (
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

ModelCrud.propTypes = {
  onChange: PropTypes.func,
  service: PropTypes.instanceOf(Object).isRequired,
  modelName: PropTypes.string.isRequired,
  model: PropTypes.instanceOf(Object).isRequired,
};

export default ModelCrud;
