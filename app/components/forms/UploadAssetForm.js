import React from 'react';
import { render } from 'react-dom';
import { withFormik } from 'formik';
import {
  Button,
  Form,
  Label,
  Input,
  Header,
} from 'semantic-ui-react';
import FileInput from '../inputs/FileInput';
import ModelsSelect from '../inputs/ModelsSelect';
// import AssetsTypeSelect from '../inputs/AssetsTypeSelect';
import Service from '../../services/Service';
// import { transformAPIErrors } from '../../helpers/validation';
import ErrorMessage from '../general/ErrorMessage';

const styles = {
  field: {
    textAlign: 'left',
  },
};

const UploadAssetForm = props => {
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
      <Form.Field style={styles.field}>
        <ModelsSelect
          fluid
          name="model"
          value={values.model}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='Select model'
        />
        <ErrorMessage
          field="model"
          touched={touched}
          errors={errors}
        />
      </Form.Field>
      {/* <Form.Field style={styles.field}>
        <AssetsTypeSelect
          fluid
          name="type"
          value={values.type}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder='Select type'
        />
        <ErrorMessage
          field="type"
          touched={touched}
          errors={errors}
        />
      </Form.Field> */}
      <Form.Field style={styles.field}>
        <FileInput
          fluid
          name="file"
          icon='file'
          iconPosition='left'
          placeholder='Select file'
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
        <Input
          fluid
          name="name"
          icon='file text'
          iconPosition='left'
          placeholder='Name'
          value={values.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <ErrorMessage
          field="name"
          touched={touched}
          errors={errors}
        />
      </Form.Field>
        <Button
          color='teal'
          icon="send"
          fluid
          size='large'
          disabled={isSubmitting}
        >
          Send
        </Button>
    </Form>
  );
};

export default withFormik({
  mapPropsToValues: (props) => ({
    file: null,
    model: '',
    name: '',
    type: props.type,
  }),
  validate: values => {
    let errors = {};
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
  handleSubmit: (values, { setSubmitting, setErrors, setError, props }) => {
    return Service(values.model)
      .upload(values)
      .then(res => {
        props.onSubmitSuccess(res);
        setSubmitting(false);
        return res;
      }).catch((err) => {
        setError(err);
        setSubmitting(false);
      });
  },
  displayName: 'UploadAssetForm',
})(UploadAssetForm);
