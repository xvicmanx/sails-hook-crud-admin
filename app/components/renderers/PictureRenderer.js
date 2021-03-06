import React from 'react';
import PropTypes from 'prop-types';
import Service from '../../services/Service';
import ImagesSelect from '../general/ImagesSelect';
import ResourceItem from '../general/ResourceItem';
import Constants from '../../constants';

const service = Service('crudasset');

const PictureRenderer = (modelName) => {
  const Wrapper = ({ field }) => (
    <ResourceItem data={service.fetchAllItems()}>
      {(assets) => {
        const imagesUrls = (assets || [])
          .filter(a => a.type === Constants.ASSETS_TYPES.PICTURE)
          .filter(a => a.model === modelName)
          .map(i => i.url);
        return (
          <ImagesSelect
            {...field}
            images={imagesUrls}
          />
        );
      }}
    </ResourceItem>
  );

  Wrapper.propTypes = {
    field: PropTypes.instanceOf(Object).isRequired,
  };

  return Wrapper;
};

export default PictureRenderer;
