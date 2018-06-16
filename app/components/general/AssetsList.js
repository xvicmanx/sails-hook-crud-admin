import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import { Item, Card, Icon, Image } from 'semantic-ui-react';
import Constants from '../../constants';
import { modelTitle } from '../../helpers/models';

const styles = {
  item: {
    fontSize: '1em',
    width: 'fit-content',
    display: 'inline-flex',
    border: '1px solid #ccc',
    margin: '.5rem',
    borderRadius: '5px',
    overflow: 'hidden',
    padding: '1rem',
  },
  picture: {
    width: '100%',
    maxWidth: '200px',
    maxHeight: '200px',
    objectFit: 'contain',
  }
};

const isPicture = type => Constants.ASSETS_TYPES.PICTURE === type;

const AssetItem = ({ type, url, name }) => (
  <Card style={styles.item}>
    {isPicture(type) && (
      <Card.Content>
        <Image
          src={url}
          style={styles.picture}
        />
      </Card.Content>
    )}

    {!isPicture(type) && (
      <Card.Content>
        <Icon
          size="huge"
          name="file outline"
        />
      </Card.Content>
    )}

    <Card.Header textAlign="center">
      {name}
      {!isPicture(type) && (
      <a href={url}>
        &nbsp;&nbsp;<Icon size="large" name="download"/>
      </a>
    )}
    </Card.Header>
  </Card>
);

const AssetsList = props => {
  const { items, type } = props;
  const filteredItems = items.filter(x => x.type === props.type);
  const groupedItems = _.groupBy(filteredItems, 'model');
  const keys = Object.keys(groupedItems);

  return (
    <div>
      {keys.map(name => (
        <Card fluid>
          <Card.Content>
            <Card.Header>
              {modelTitle(name)} {props.type}s
            </Card.Header>
          </Card.Content>
          <Card.Content>
            <Card.Group>
              {groupedItems[name].map(item => (
                <AssetItem
                  {...item}
                  type={props.type}
                />
              ))}
            </Card.Group>
          </Card.Content>
        </Card>
      ))}
    </div>
  );
};

AssetsList.propTypes = {
  items: PropTypes.instanceOf(Array).isRequired,
  type: PropTypes.string.isRequired
};

export default AssetsList;