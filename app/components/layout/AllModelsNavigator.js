import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Statistic } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { getModels } from '../../helpers/models';
import {} from '../../helpers/string';
import { getModelRelatedValue } from '../../helpers/config';
import rightProtected from '../high-order/RightProtected';

const ProtectedStat = rightProtected(
  null,
  null
)(Statistic);

const AllModelsNavigator = (props) => {
  return (
    <Statistic.Group
      size="mini"
      className="models-navigator"
    >
      {Object.keys(getModels()).map(modelName => (
        <ProtectedStat
          right={`read::${modelName}`}
          className="models-navigator__link"
          as={Link}
          to={`/model/${modelName}`}
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
  );
};

AllModelsNavigator.propTypes = {};

export default AllModelsNavigator;
