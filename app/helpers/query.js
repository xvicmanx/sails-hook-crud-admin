const mapCondition = (x) => {
  switch (x) {
    case 'CONTAINS': return 'contains';
    case 'ENDS_WITH': return 'endsWith';
    case 'BEGINS_WITH': return 'startsWith';
    case 'IS': return 'is';
    case 'EQUALS_TO': return 'equals';
    case 'IS_NOT_EQUALS_TO': return '!=';
    case 'DOES_NOT_BEGIN_WITH': return '!=';
    case 'DOES_NOT_END_WITH': return '!=';
    case 'DOES_NOT_CONTAIN': return '!=';
    case 'LESS_THAN': return '<';
    case 'IS_NOT_LESS_THAN': '>=';
    case 'GREATER_THAN': return '>';
    case 'IS_NOT_GREATER_THAN': return '<=';
    case 'LESS_OR_EQUALS_THAN': return '<=';
    case 'IS_NOT_LESS_OR_EQUALS_THAN': return '>';
    case 'IS_NOT_LESS_OR_EQUALS_THAN': return '>';
    case 'GREATER_OR_EQUALS_THAN': return '>=';
    case 'IS_NOT_GREATER_OR_EQUALS_THAN': return '<';
    default: return 'contains';
  }
};

const getValue = (rule) => {
  if (
    rule.type === 'date'
    && typeof rule.value === 'string'
  ) {
    return new Date(rule.value).getTime();
  }
  return rule.value;
};

const buildQuery = rules => rules.reduce((query, rule) => {
  const condition = mapCondition(rule.condition);
  const value = getValue(rule);

  if (condition === 'equals') {
    query[rule.field] = value;
  } else if (condition === 'is') {
    query[rule.field] = value;
  } else {
    query[rule.field] = {
      [condition]: value,
    };
  }

  return query;
}, {});

module.exports = {
  buildQuery,
};
