import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from './Select';
import Service from '../../services/Service';
import { getModelValue } from '../../helpers/models';
import { queryValue } from '../../helpers/object';

const mapOptions = model => x => (
  {
    value: x.id,
    key: x.id,
    text: getModelValue(model, x)
      || `${model} (id: ${x.id})`,
  }
);

class ModelsSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    const { model } = this.props;
    const service = Service(model);
    service.fetchAllItems({})
      .then((items) => {
        this.setState({ items });
      });
  }

  render() {
    const { field, model } = this.props;
    const { items } = this.state;
    return (
      <Select
        {...field}
        value={queryValue(field, 'value.id', field.value)}
        options={items.map(mapOptions(model))}
      />
    );
  }
}

ModelsSelect.propTypes = {
  model: PropTypes.string.isRequired,
  field: PropTypes.string.isRequired,
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
