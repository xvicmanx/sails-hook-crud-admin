import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, List, Divider } from 'semantic-ui-react';
import Select from './Select';
import Service from '../../services/Service';
import { getModelValue } from '../../helpers/models';

const getText = (model, x) => (x && getModelValue(model, x))
|| `${model} (id: ${x.id})`;

const mapOption = model => x => ({
  value: x.id,
  key: x.id,
  text: getText(model, x),
});

const styles = {
  addButton: {
    minWidth: 'fit-content',
    marginLeft: '1rem',
  },
  removeButton: {
    minWidth: 'fit-content',
    marginLeft: '1rem',
    float: 'right',
  },
  container: {
    border: '1px solid #ccc',
    borderRadius: '3px',
    padding: '1rem',
    textAlign: 'left',
    margin: '.5rem 0',
  },
  item: {
    lineHeight: '36px',
  },
};

class ModelsSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      ids: [],
      id: null,
    };
    this.handleAdd = this.handleAdd.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  componentDidMount() {
    const { model } = this.props;
    const service = Service(model);
    service.fetchAllItems({}).then((items) => {
      this.setState({ items });
    });
  }

  componentWillReceiveProps(nextProps) {
    const ids = (nextProps.field.value
      && nextProps.field.value.map(x => (x && x.id) || x)) || [];
    this.setState({ ids });
  }

  triggerOnChange(evt, ids) {
    const { field } = this.props;
    const e = evt;
    e.target = {
      name: field.name,
      value: ids,
    };
    field.onChange(e);
  }

  handleAdd(evt) {
    evt.preventDefault();
    evt.stopPropagation();
    const { id, ids } = this.state;
    if (id) {
      const newIds = [
        ...ids,
        +id,
      ];
      this.setState({ ids: newIds, id: null });
      this.triggerOnChange(evt, newIds);
    }
  }

  handleRemove(evt, id) {
    evt.preventDefault();
    evt.stopPropagation();

    const { ids } = this.state;
    const filteredIds = ids.filter(x => x !== id);
    this.setState({ ids: filteredIds });
    this.triggerOnChange(evt, filteredIds);
  }

  handleChange(evt) {
    this.setState({ id: evt.target.value });
  }

  render() {
    const { ids, items, id } = this.state;
    const { model } = this.props;
    return (
      <div style={styles.container}>
        <List divided relaxed>
          {ids.map(itemId => (
            <List.Item
              key={itemId}
            >
              <List.Content style={styles.item}>
                {getText(
                  model,
                  items.find(x => x.id === itemId),
                )}
&nbsp;
                <Button
                  color="red"
                  onClick={(evt) => {
                    this.handleRemove(evt, itemId);
                  }}
                  circular
                  icon="close"
                  style={styles.removeButton}
                />
              </List.Content>
            </List.Item>
          ))}
        </List>
        <Divider />
        <div>
          <Select
            value={id}
            onChange={this.handleChange}
            options={items.map(
              mapOption(model),
            )}
          />
          <Button
            color="green"
            onClick={this.handleAdd}
            icon="plus"
            circular
            style={styles.addButton}
          />
        </div>
      </div>
    );
  }
}

ModelsSelect.propTypes = {
  model: PropTypes.string.isRequired,
  field: PropTypes.shape({
    value: PropTypes.instanceOf(Array),
  }).isRequired,
};

export default (model) => {
  const Wrapper = ({ field }) => (
    <ModelsSelect
      field={field}
      model={model}
    />
  );
  Wrapper.propTypes = {
    field: PropTypes.instanceOf(Object).isRequired,
  };
  return Wrapper;
};
