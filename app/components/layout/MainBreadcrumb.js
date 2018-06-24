import React from 'react';
import { Link } from 'react-router-dom';
import { Breadcrumb, Icon } from 'semantic-ui-react';
import Constants from '../../constants';
import '../../helpers/string';
import { iconForArea } from '../../helpers/config';
import {
  getConfig,
  getModelRelatedValue,
} from '../../helpers/config';
import { modelTitle } from '../../helpers/models';

const styles = {
  container: { marginBottom: '2rem' },
};

const backLink = area => (area === 'home' ? '/model' : '/permissions');

const MainBreadcrumb = ({ modelName, area }) => (
  <Breadcrumb
    size="huge"
    style={styles.container}
  >
    <Breadcrumb.Section
      link
      as={Link}
      to={backLink(area)}
    >
      <Icon color="teal" name={iconForArea(area)} />
&nbsp;
      {Constants.LABELS[area.toUpperCase()]}
    </Breadcrumb.Section>
    <Breadcrumb.Divider icon="right angle" />
    <Breadcrumb.Section active>
      {modelTitle(modelName)}
    </Breadcrumb.Section>
  </Breadcrumb>
);

MainBreadcrumb.defaultProps = {
  area: 'home',
};

export default MainBreadcrumb;
