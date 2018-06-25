import React from 'react';
import PropTypes from 'prop-types';

class FileInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: null };
  }

  render() {
    const { label, onChange } = this.props;
    const { value } = this.state;
    return (
      <label htmlFor="file">
        {label}
        <input
          {...this.props}
          type="file"
          value={value}
          multiple="multiple"
          onChange={(event) => {
            this.setState({ value: event.target.value });
            onChange({
              persist: () => {},
              target: {
                name: event.target.name,
                type: event.target.type,
                value: event.target.files[0],
              },
            });
          }}
        />
      </label>
    );
  }
}

FileInput.propTypes = {
  onChange: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default FileInput;
