import React from 'react';
import PropTypes from 'prop-types';

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: null };
  }

  render() {
    return (
      <input
        {...this.props}
        type="file"
        value={this.state.value}
        multiple="multiple"
        onChange={(event) => {
          this.setState({ value: event.target.value });
          this.props.onChange({
            persist: () => {},
            target: {
              name: event.target.name,
              type: event.target.type,
              value: event.target.files[0],
            },
          });
        }}
      />
    );
  }
}

FileInput.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default FileInput;
