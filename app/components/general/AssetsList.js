import React from 'react';
import PropTypes from 'prop-types';
import { Item, Card } from 'semantic-ui-react';
import _ from 'lodash';
import ResourceItem from './ResourceItem';
import Service from '../../services/Service';

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
};

const AssetsList = props => {
  return (
    <ResourceItem
      defaultValue={[]}
      data={Service('crudasset').fetchAllItems()}
    >
      {(items) => {
        const filteredItems = items.filter(x => x.type === props.type);
        const groupedItems = _.groupBy(filteredItems, 'model');
        return (
          <div>
            {Object.keys(groupedItems).map(name => (
              <Card fluid>
                <Card.Content>
                  <Card.Header>{name}</Card.Header>
                </Card.Content>
                <Card.Content>
                  <Item.Group>
                    {groupedItems[name].map(item => (
                      <Item style={styles.item}>
                        {props.type === 'picture' && (
                          <Item.Image src={item.url} />
                        )}
                        {props.type !== 'picture' && (
                          <Item.Content>
                            {JSON.stringify(item.name)}
                          </Item.Content>
                        )}
                      </Item>
                    ))}
                  </Item.Group>
                </Card.Content>
              </Card>
            ))}
        </div>
        );
      }}
    </ResourceItem>
  );
};

AssetsList.propTypes = {
  
};

export default AssetsList;