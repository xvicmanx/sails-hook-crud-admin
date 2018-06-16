import React from 'react'
import { Button, Modal } from 'semantic-ui-react';
import UploadAssetForm from '../forms/UploadAssetForm';

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
          content="Upload Asset"
          onClick={() => {
            this.showModal();
          }}
        />
        <Modal
          open={this.state.open}
          onClose={() => {
            this.hideModal();
          }}
        >
          <Modal.Header>Uploading Asset</Modal.Header>
          <Modal.Content>
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
