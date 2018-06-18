import React from 'react'
import { Button, Modal, Icon } from 'semantic-ui-react';
import UploadAssetForm from '../forms/UploadAssetForm';

const styles = {
  content: {
    padding: '1.5rem 0',
  },
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
    return (
      <div>
        <Button
          color="blue"
          content={`Upload ${this.props.type}`}
          icon="upload"
          onClick={() => {
            this.showModal();
          }}
        />
        <Modal
          open={this.state.open}
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
              type={this.props.type}
              onSubmitSuccess={() => {
                this.hideModal();
                this.props.onSuccess();
              }}
            />
          </Modal.Content>
        </Modal>
      </div>
    );
  }
}

export default UploadAssetModal;
