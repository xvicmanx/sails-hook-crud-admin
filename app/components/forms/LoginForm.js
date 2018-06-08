import React from 'react';
import { render } from 'react-dom';
import { withFormik } from 'formik';
import {
  Button,
  Form,
  Segment,
  Label,
  Input,
} from 'semantic-ui-react';
import Service from '../../services/Service';

const inputClass = field => (errors, touched) => errors[field] &&
  touched[field] ?
  ('text-input error') :
  ('text-input');

const Error = ({ field, errors, touched }) => {
  if (!touched[field] || !errors[field]) return null;
  return (
    <Label basic color='red' pointing>
      {errors[field]}
    </Label>
  );
};


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
      <Form.Field
        style={{ textAlign: 'left' }}
        className={inputClass('username')(errors, touched)}
      >
        <Input
          fluid
          name="username"
          icon='user'
          iconPosition='left'
          placeholder='Username'
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Error
          field="username"
          touched={touched}
          errors={errors}
        />
      </Form.Field>
      <Form.Field
        style={{ textAlign: 'left' }}
        className={inputClass('password')(errors, touched)}
      >
        <Input
          fluid
          name="password"
          icon='lock'
          iconPosition='left'
          placeholder='password'
          type='Password'
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <Error
          field="password"
          touched={touched}
          errors={errors}
        />
      </Form.Field>
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

const transformAPIErrors = (error) => {
  const errors = {};
  if (error.fields) {
    Object.keys(error.fields)
      .forEach(k => {
        errors[k] = error.fields[k];
      });
  }
  return errors;
}

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
  handleSubmit: (values, { setSubmitting, setErrors, props }) => {
    return Service()
      .login(values)
      .then(res => {
        if (res.error) {
          setErrors(transformAPIErrors(res.error))
        } else if (res.token && res.success){
          props.onSubmitSuccess(res);
        }
        setSubmitting(false);
        return res;
      });
  },
  displayName: 'LoginForm',
})(LoginForm);
