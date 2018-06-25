import React from 'react';
import PropTypes from 'prop-types';
import { withFormik } from 'formik';
import {
  Button,
  Form,
  Input,
  Icon,
} from 'semantic-ui-react';
import FileInput from '../inputs/FileInput';
import ModelsSelect from '../inputs/ModelsSelect';
import Service from '../../services/Service';
import ErrorMessage from '../general/ErrorMessage';
import AuthStore from '../../AuthStore';

const styles = {
  field: {
    textAlign: 'left',
  },
};

const UploadAssetForm = (props) => {
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
      size="large"
    >
      <div className="crud-modal-form__fields">
        <Form.Field style={styles.field}>
          <ModelsSelect
            fluid
            name="model"
            label="Model"
            value={values.model}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Select model"
            filter={item => AuthStore.canUploadAssetsForModel(item.value)}
          />
          <ErrorMessage
            field="model"
            touched={touched}
            errors={errors}
          />
        </Form.Field>
        <Form.Field style={styles.field}>
          <FileInput
            fluid
            name="file"
            icon="file"
            label="File"
            iconPosition="left"
            placeholder="Select file"
            value={values.file}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <ErrorMessage
            field="file"
            touched={touched}
            errors={errors}
          />
        </Form.Field>
        <Form.Field style={styles.field}>
          <label htmlFor="name">
            Name
            <Input
              fluid
              name="name"
              icon="file text"
              iconPosition="left"
              placeholder="Name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </label>
          <ErrorMessage
            field="name"
            touched={touched}
            errors={errors}
          />
        </Form.Field>
      </div>
      <div className="crud-modal-form__footer">
        <Button
          color="teal"
          icon="send"
          fluid
          size="large"
          disabled={isSubmitting}
        >
          <Icon name="send" />
          {' '}
          Send
        </Button>
      </div>
    </Form>
  );
};

UploadAssetForm.propTypes = {
  values: PropTypes.instanceOf(Object).isRequired,
  touched: PropTypes.instanceOf(Object).isRequired,
  errors: PropTypes.instanceOf(Object).isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
};

export default withFormik({
  mapPropsToValues: ({ type }) => ({
    file: null,
    model: '',
    name: '',
    type,
  }),
  validate: (values) => {
    const errors = {};
    if (!values.file) {
      errors.file = 'Please select the file!';
    }
    if (!values.model) {
      errors.model = 'Please select the model';
    }

    if (!values.type) {
      errors.type = 'Please select the type';
    }

    if (!values.name) {
      errors.name = 'Please insert the name';
    }

    return errors;
  },
  handleSubmit: (values, {
    setSubmitting,
    setError,
    props,
  }) => Service(values.model)
    .upload(values)
    .then((res) => {
      const { onSubmitSuccess } = props;
      onSubmitSuccess(res);
      setSubmitting(false);
      return res;
    }).catch((err) => {
      setError(err);
      setSubmitting(false);
    }),
  displayName: 'UploadAssetForm',
})(UploadAssetForm);
