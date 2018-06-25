import React, { Component } from 'react';
import PropTypes from 'prop-types';
import RightsSelector from 'rights-selector';
import Service from '../../services/Service';
import { modelTitle } from '../../helpers/models';
import Constants from '../../constants';

class RightsItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    const service = Service('crudright');
    service.fetchAllItems({})
      .then((items) => {
        this.setState({ items });
      });
  }

  render() {
    const { items } = this.state;
    const { children } = this.props;
    return children(items);
  }
}

RightsItems.propTypes = {
  children: PropTypes.func.isRequired,
};

const extractAction = r => r.replace(/(.+)::(.+)/, '$1');
const extractResource = r => r.replace(/(.+)::(.+)/, '$2');

const RightsRenderer = ({ field }) => (
  <RightsItems>
    {(items) => {
      const userRightsIds = (field.value || []).map(r => r.id || r);
      const userRights = items
        .filter(r => userRightsIds.indexOf(r.id) >= 0)
        .map(r => r.name);

      const rightsToInject = {};
      userRights.forEach((r) => {
        const action = extractAction(r);
        const resource = extractResource(r);
        rightsToInject[resource] = rightsToInject[resource] || {};
        rightsToInject[resource][action] = true;
      });

      const rights = items.map(r => r.name);
      const actions = {};
      const resources = {};
      rights.forEach((r) => {
        const action = extractAction(r);
        const resource = extractResource(r);
        actions[action] = action;
        resources[resource] = resource;
      });

      return (
        <RightsSelector
          rights={rightsToInject}
          actionsLabel={Constants.LABELS.ACTIONS}
          resourcesLabel={Constants.LABELS.RESOURCES}
          actions={Object.keys(actions).map(a => ({
            label: a,
            value: a,
          }))}
          resources={Object.keys(resources).map(a => ({
            label: modelTitle(a),
            value: a,
          }))}
          onChange={(values) => {
            const ids = [];
            Object.keys(values).forEach((resource) => {
              Object.keys(values[resource]).forEach((action) => {
                if (values[resource][action]) {
                  const right = items
                    .find(x => x.name === `${action}::${resource}`);
                  if (right) {
                    ids.push(right.id);
                  }
                }
              });
            });
            field.onChange({
              persist: () => {},
              target: {
                name: field.name,
                value: ids,
              },
            });
          }}
        />
      );
    }}
  </RightsItems>
);

RightsRenderer.propTypes = {
  field: PropTypes.instanceOf(Object).isRequired,
};

export default RightsRenderer;
