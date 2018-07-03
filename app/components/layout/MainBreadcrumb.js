import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Breadcrumb, Icon } from 'semantic-ui-react';
import Constants from '../../constants';
import '../../helpers/string';
import { iconForArea } from '../../helpers/config';
import { modelTitle } from '../../helpers/models';

const styles = {
  container: { marginBottom: '2rem' },
};

const backLink = (area) => {
  switch (area) {
    case 'home':
      return '/model';
    case 'views':
      return '/views';
    default:
      return '/permissions';
  }
};

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

MainBreadcrumb.propTypes = {
  area: PropTypes.string,
  modelName: PropTypes.string.isRequired,
};

export default MainBreadcrumb;
