import React from 'react';
import PropTypes from 'prop-types';
import { Statistic, Header, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../../helpers/string';
import { iconForArea } from '../../helpers/config';
import rightProtected from '../high-order/RightProtected';
import Constants from '../../constants';
import { modelTitle } from '../../helpers/models';

const ProtectedStat = rightProtected(
  null,
  null,
)(Statistic);


const ModelsNavigator = (props) => {
  const { area, models, counts } = props;
  const queryString = `?area=${area}`;
  return (
    <div>
      <Header size="huge">
        <Icon color="teal" name={iconForArea(area)} />
        {Constants.LABELS[area.toUpperCase()]}
      </Header>
      <Statistic.Group
        size="mini"
        className="models-navigator"
      >
        {models.map(modelName => (
          <ProtectedStat
            right={`read::${modelName}`}
            className="models-navigator__link"
            as={Link}
            to={`/model/${modelName}${queryString}`}
          >
            <Statistic.Value>
              {counts[modelName] || 0}
            </Statistic.Value>
            <Statistic.Label>
              {modelTitle(modelName)}
            </Statistic.Label>
          </ProtectedStat>
        ))}
      </Statistic.Group>
    </div>
  );
};

ModelsNavigator.defaultProps = {
  models: [],
  area: 'home',
  counts: {},
};

ModelsNavigator.propTypes = {
  models: PropTypes.instanceOf(Array),
  area: PropTypes.string,
  counts: PropTypes.instanceOf(Object),
};

export default ModelsNavigator;
