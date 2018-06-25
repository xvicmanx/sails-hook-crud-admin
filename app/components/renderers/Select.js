import React, { Component } from 'react';
import PropTypes, { string } from 'prop-types';

class Select extends Component {
  constructor(props) {
    super(props);
    this.state = { value: props.value };
    this.handleChange = this.handleChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    const { value } = this.props;
    if (nextProps.value !== value) {
      this.setState({ value: nextProps.value });
    }
  }

  getValue() {
    const { value } = this.state;
    return value;
  }

  handleChange(evt) {
    const { onChange } = this.props;
    onChange(
      evt,
      {
        value: evt.target.value,
      },
    );
  }


  render() {
    const {
      name,
      value,
      placeholder,
      options,
    } = this.props;
    const stateValue = this.getValue();
    return (
      <select
        name={name}
        onChange={this.handleChange}
        value={value || ''}
      >
        <option
          value=""
          selected={!stateValue}
        >
          {placeholder}
        </option>
        {options.map(option => (
          <option
            key={option.key}
            value={option.value}
          >
            {option.text}
          </option>
        ))}
      </select>
    );
  }
}

Select.propTypes = {
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.any,
      value: PropTypes.any,
      text: PropTypes.any,
    }),
  ).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Select;
