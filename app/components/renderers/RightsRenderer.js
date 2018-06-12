import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Service from '../../services/Service';
import RightsSelector from 'rights-selector';

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
    return this.props.children(items);
  }
}

RightsItems.propTypes = {
  children: PropTypes.func.isRequired,
};

const extractAction = r => r.replace(/(.+)::(.+)/, '$1');
const extractResource = r => r.replace(/(.+)::(.+)/, '$2');

export default ({ field }) => {
  return (
    <RightsItems>
      {items => {
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
        rights.forEach(r => {
          const action = extractAction(r);
          const resource = extractResource(r);
          actions[action] = action;
          resources[resource] = resource;
        });

        return (
          <RightsSelector
            rights={rightsToInject}
            actionsLabel="Actions"
            resourcesLabel="Resources"
            actions={Object.keys(actions).map(a => ({
              label: a,
              value: a,
            }))}
            resources={Object.keys(resources).map(a => ({
              label: a,
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
  </RightsItems>);
};