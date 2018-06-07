import React from 'react';
import { render } from 'react-dom';
import { withFormik } from 'formik';
import {
  Button,
  Form,
  Segment,
} from 'semantic-ui-react';
import Service from '../../services/Service';

const inputClass = field => (errors, touched) => errors[field] &&
  touched[field] ?
  ('text-input error') :
  ('text-input');


const LoginForm = props => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  return (
    <Form
      onSubmit={handleSubmit}
      size='large'
    >
      <Segment>
        <Form.Input
          fluid
          name="username"
          icon='user'
          iconPosition='left'
          placeholder='Username'
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputClass('username')(errors, touched)}
        />
        <Form.Input
          fluid
          name="password"
          icon='lock'
          iconPosition='left'
          placeholder='password'
          type='Password'
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          className={inputClass('password')(errors, touched)}
        />
        <Button
          color='teal'
          icon="send"
          fluid size='large'
          disabled={isSubmitting}
        >
          Login
        </Button>
      </Segment>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues: () => ({
    username: '',
    password: '',
  }),
  validate: values => {
    let errors = {};
    if (!values.username) {
      errors.username = 'Required';
    }
    if (!values.password) {
      errors.password = 'Required';
    }
    return errors;
  },
  handleSubmit: (values, { setSubmitting }) => {
    return Service()
      .login(values)
      .then(res => {
        setSubmitting(false);
        return res;
      });
  },
  displayName: 'LoginForm',
})(LoginForm);
