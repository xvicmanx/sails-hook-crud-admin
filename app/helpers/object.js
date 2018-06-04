export const queryValue = (source, query = '', defaultValue = null) => {
  const value = query.split('.').reduce((result, key) => (result && result[key] ? result[key] : null), source);
  return value || defaultValue;
};

export const anyPropLike = (props, value) => (obj) => {
  if (!props || props.length <= 0) return true;
  return props.reduce((acc, x) => {
    const target = (`${queryValue(obj, x, '')}`).toLowerCase();
    const needle = (`${value}`).toLowerCase();
    return acc || target.indexOf(needle) >= 0;
  }, false);
};

export const omit = (source, props) => {
  if (!source) return source;

  if (Array.isArray(source)) {
    const result = JSON.parse(JSON.stringify(source));
    result.forEach((element, index) => {
      result[index] = omit(result[index], props);
    });
    return result;
  }

  return Object.keys(source)
    .filter(k => props.indexOf(k) < 0)
    .reduce((acc, key) => {
      const result = acc;
      result[key] = source[key];
      return result;
    }, {});
};

export default {
  queryValue,
  anyPropLike,
  omit,
};
