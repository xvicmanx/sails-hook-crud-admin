import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, Icon } from 'semantic-ui-react';
import UploadAssetForm from '../forms/UploadAssetForm';

const styles = {
  content: { padding: '1.5rem 0' },
};

class UploadAssetModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }

  showModal() {
    this.setState({ open: true });
  }

  hideModal() {
    this.setState({ open: false });
  }

  render() {
    const { type, onSuccess } = this.props;
    const { open } = this.state;
    return (
      <div>
        <Button
          color="blue"
          content={`Upload ${type}`}
          icon="upload"
          onClick={() => {
            this.showModal();
          }}
        />
        <Modal
          open={open}
          onClose={() => {
            this.hideModal();
          }}
          size="tiny"
          closeIcon
        >
          <Modal.Header>
            <Icon name="upload" color="teal" />
            Uploading Asset
          </Modal.Header>
          <Modal.Content style={styles.content}>
            <UploadAssetForm
              type={type}
              onSubmitSuccess={() => {
                this.hideModal();
                onSuccess();
              }}
            />
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

UploadAssetModal.propTypes = {
  onSuccess: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};

export default UploadAssetModal;
