import React from 'react';
import PropTypes from 'prop-types';

class ResourceItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null,
    };
  }

  componentDidMount() {
    this.props.data.then((result) => {
      this.setState({ result });
    });
  }

  render() {
    return (
      <div>
        {this.props.children(
          this.state.result
          || this.props.defaultValue,
        )}
      </div>
    );
  }
}

ResourceItem.propTypes = {
  data: PropTypes.instanceOf(Promise).isRequired,
  children: PropTypes.func.isRequired,
};

export default ResourceItem;
