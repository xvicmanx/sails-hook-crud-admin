import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Select from './Select';
import Service from '../../services/Service';

const mapIdsToOptions = model => x => (
  {
    value: x.id,
    key: x.id,
    text: `${model} (id: ${x.id})`
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
    const service = Service(this.props.model);
    service.fetchAllItems({}).then((items) => {
      this.setState({ items });
    });
  }
  

  render() {
    return <div>{JSON.stringify(this.props.field)}</div>;
    // return (
    //   <Select
    //     {...this.props.field}
    //     options={this.state.items.map(mapIdsToOptions(this.props.model))}
    //   />
    // );
  }
}



ModelsSelect.propTypes = {
  model: PropTypes.string.isRequired,
};

export default (model) => ({ field }) => <ModelsSelect field={field} model={model} />;