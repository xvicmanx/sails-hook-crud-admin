import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Statistic, Header } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import '../../helpers/string';
import { getModelRelatedValue } from '../../helpers/config';
import rightProtected from '../high-order/RightProtected';
import Constants from '../../constants';

const ProtectedStat = rightProtected(
  null,
  null
)(Statistic);

const ModelsNavigator = (props) => {
  const queryString = `?area=${props.area}`;    
  return (
    <div>
      <Header size='huge'>
        {Constants.LABELS[props.area.toUpperCase()]}
      </Header>
      <Statistic.Group
        size="mini"
        className="models-navigator"
      >
        {props.models.map(modelName => (
          <ProtectedStat
            right={`read::${modelName}`}
            className="models-navigator__link"
            as={Link}
            to={`/model/${modelName}${queryString}`}
          >
            <Statistic.Value>
              {props.counts[modelName] || 0}
            </Statistic.Value>
            <Statistic.Label>
              {getModelRelatedValue(
                `${modelName}.label`,
              ) || modelName.asTitle() }
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
};

ModelsNavigator.propTypes = {};

export default ModelsNavigator;
