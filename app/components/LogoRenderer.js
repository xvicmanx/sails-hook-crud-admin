import React from 'react';
import PropTypes from 'prop-types';
import services from '@xvicmanx/circus-application-core';
import ImagesSelect from './ImagesSelect';
import ResourceItem from './ResourceItem';

const LogoRenderer = ({ field }) => (
  <ResourceItem data={services.PictureService.getPictures()} >
    {images => (
      <ImagesSelect
        {...field}
        images={(images || [])
          .map(services.PictureService.pictureURL)
        }
      />
    )}
  </ResourceItem>
);

LogoRenderer.propTypes = {
  field: PropTypes.instanceOf(Object).isRequired,
};

export default LogoRenderer;
