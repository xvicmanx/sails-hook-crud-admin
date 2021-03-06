import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import {
  Button,
  Form,
  Segment,
  Label,
  Input,
  Header,
} from 'semantic-ui-react';
import Service from '../../services/Service';

const inputClass = field => (errors, touched) => (errors[field]
  && touched[field]
  ? ('text-input error')
  : ('text-input'));

const Error = ({ field, errors, touched }) => {
  if (!touched[field] || !errors[field]) return null;
  return (
    <Label basic color="red" pointing>
      {errors[field]}
    </Label>
  );
};

Error.propTypes = {
  field: PropTypes.string.isRequired,
  touched: PropTypes.instanceOf(Object).isRequired,
  errors: PropTypes.instanceOf(Object).isRequired,
};

const styles = {
  field: {
    textAlign: 'left',
  },
};

const LoginForm = (props) => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;
  const userFieldClass = inputClass('username')(errors, touched);
  const passwordFieldClass = inputClass('password')(errors, touched);
  return (
    <Form
      onSubmit={handleSubmit}
      size="large"
    >
      <Segment>
        <Header
          as="h2"
          color="black"
          textAlign="center"
          content="Login"
        />
        <Form.Field
          style={styles.field}
          className={userFieldClass}
        >
          <Input
            fluid
            name="username"
            icon="user"
            iconPosition="left"
            placeholder="Username"
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
          style={styles.field}
          className={passwordFieldClass}
        >
          <Input
            fluid
            name="password"
            icon="lock"
            iconPosition="left"
            placeholder="password"
            type="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            maxLength={45}
          />
          <Error
            field="password"
            touched={touched}
            errors={errors}
          />
        </Form.Field>
        <Button
          color="teal"
          icon="send"
          fluid
          size="large"
          disabled={isSubmitting}
        >
          Login
        </Button>
      </Segment>
    </Form>
  );
};

LoginForm.propTypes = {
  values: PropTypes.instanceOf(Object).isRequired,
  touched: PropTypes.instanceOf(Object).isRequired,
  errors: PropTypes.instanceOf(Object).isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

const transformAPIErrors = (error) => {
  const errors = {};
  if (error.fields) {
    Object.keys(error.fields)
      .forEach((k) => {
        errors[k] = error.fields[k];
      });
  }
  return errors;
};

export default withFormik({
  mapPropsToValues: () => ({
    username: '',
    password: '',
  }),
  validate: (values) => {
    const errors = {};
    if (!values.username) {
      errors.username = 'The username is required!';
    }
    if (!values.password) {
      errors.password = 'The password is required!';
    }
    return errors;
  },
  handleSubmit: (values, { setSubmitting, setErrors, props }) => Service()
    .login(values)
    .then((res) => {
      if (res.error) {
        setErrors(transformAPIErrors(res.error));
      } else if (res.token && res.success) {
        props.onSubmitSuccess(res);
      }
      setSubmitting(false);
      return res;
    }),
  displayName: 'LoginForm',
})(LoginForm);
