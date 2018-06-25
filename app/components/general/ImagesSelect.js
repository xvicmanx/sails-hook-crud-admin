import React from 'react';
import PropTypes from 'prop-types';
import { Card, Divider, Message } from 'semantic-ui-react';

const styles = {
  container: {
    margin: '1rem 0',
  },
  image: {
    width: '100%',
    maxWidth: '120px',
  },
};

const selectionClass = selected => selected && 'selected-picture';

class ImagesSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: null,
    };
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ selectedImage: nextProps.value });
  }

  handleImageSelection(selectedImage, evt) {
    const { name, onChange } = this.props;
    this.setState({ selectedImage });
    const event = evt;
    event.target.value = selectedImage;
    event.target.name = name;
    onChange(event);
  }

  render() {
    const { images } = this.props;
    const { selectedImage } = this.state;

    if (images.lenth <= 0) {
      return (
        <Message
          info
          icon="info"
          content="There are no items to show"
        />
      );
    }

    return (
      <div style={styles.container}>
        <Card.Group itemsPerRow={3}>
          {images.map(image => (
            <Card
              onClick={(evt) => {
                this.handleImageSelection(image, evt);
              }}
              raised
              image={image}
              className={selectionClass(selectedImage === image)}
              style={styles.image}
            />
          ))}
        </Card.Group>
        <Divider />
      </div>
    );
  }
}
ImagesSelect.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

export default ImagesSelect;
