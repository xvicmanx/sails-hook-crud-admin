import React from 'react';
import { render } from 'react-dom';
import { withFormik } from 'formik';
import {
  Button,
  Form,
  Label,
  Input,
  Header,
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
      <div className="crud-modal-form__fields">
        <Form.Field style={styles.field}>
          <ModelsSelect
            fluid
            name="model"
            label="Model"
            value={values.model}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder='Select model'
            filter={item => {
              return AuthStore.canUploadAssetsForModel(item.value);
            }}
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
            icon='file'
            label="File"
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
          <label>
            Name
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
          color='teal'
          icon="send"
          fluid
          size='large'
          disabled={isSubmitting}
        >
          <Icon name="send" /> Send
        </Button>
      </div>
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
