import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'semantic-ui-react';

const styles = {
  container: {
    margin: '1rem 0',
  },
  image: {
    width: '100%',
    maxWidth: '60px',
  },
};

const selectionColor = selected => selected && 'green';

class ImagesSelect extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedImage: null,
    };
  }

  handleImageSelection(selectedImage, evt) {
    this.setState({ selectedImage });
    const event = evt;
    event.target.value = selectedImage;
    event.target.name = this.props.name;
    this.props.onChange(event);
  }

  render() {
    return (
      <div style={styles.container}>
        <Card.Group itemsPerRow={3}>
          {this.props.images.map(image => (
            <Card
              onClick={(evt) => {
                this.handleImageSelection(image, evt);
              }}
              raised
              image={image}
              color={selectionColor(this.state.selectedImage === image)}
              style={styles.image}
            />
          ))}
        </Card.Group>
      </div>
    );
  }
}
ImagesSelect.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default ImagesSelect;
