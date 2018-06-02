const mapCondition = (x) => {
  switch(x) {
    case 'CONTAINS': return 'contains';
    case 'ENDS_WITH': return 'endsWith';
    case 'BEGINS_WITH': return 'startsWith';
    case 'IS': return 'is';
    case 'IS_NOT': return 'isNot';
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

const buildQuery = (rules) => {
  return rules.reduce((query, rule) => {
    const condition = mapCondition(rule.condition);
    if (condition === 'equals') {
      query[rule.field] = rule.value;
    } else if (condition === 'is') {
      query[rule.field] = true;
    } else if (condition === 'isNot') {
      query[rule.field] = false;
    } else {
      query[rule.field] = {
        [condition]: rule.value,
      };
    }
    
    return query;
  }, {});
};

module.exports = {
  buildQuery,
};
