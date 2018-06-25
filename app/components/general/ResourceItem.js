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
    const { data } = this.props;
    data.then((result) => {
      this.setState({ result });
    });
  }

  render() {
    const { children, defaultValue } = this.props;
    const { result } = this.state;
    return (
      <div>
        {children(
          result || defaultValue,
        )}
      </div>
    );
  }
}

ResourceItem.propTypes = {
  data: PropTypes.instanceOf(Promise).isRequired,
  children: PropTypes.func.isRequired,
  defaultValue: PropTypes.string.isRequired,
};

export default ResourceItem;
