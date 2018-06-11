import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb } from 'semantic-ui-react';
import Constants from '../../constants';
import '../../helpers/string';
import {
  getConfig,
  getModelRelatedValue,
} from '../../helpers/config';

const styles = {
  container: { marginBottom: '2rem' },
};

const backLink = (area) => {
  return area === 'home' ? '/model' : '/permissions';
};

const modelTitle = (modelName) => {
  return getModelRelatedValue(
    `${modelName}.label`,
  ) || modelName.asTitle();
};

const MainBreadcrumb = ({ modelName, area }) => {
  return (
    <Breadcrumb
      size='huge'
      style={styles.container}
    >
      <Breadcrumb.Section
        link
        as={Link}
        to={backLink(area)}
      >
        {Constants.LABELS[area.toUpperCase()]}
      </Breadcrumb.Section>
      <Breadcrumb.Divider icon='right angle' />
      <Breadcrumb.Section active>
        {modelTitle(modelName)}
      </Breadcrumb.Section>
    </Breadcrumb>
  );
};

MainBreadcrumb.defaultProps = {
  area: 'home'
};

export default MainBreadcrumb;
