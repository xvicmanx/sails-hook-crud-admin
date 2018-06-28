export const queryValue = (source, query = '', defaultValue = null) => {
  const value = query.split('.').reduce((result, key) => (result && result[key] ? result[key] : null), source);
  return value || defaultValue;
};

export const anyPropLike = (properties, value) => (obj) => {
  if (!properties || properties.length <= 0) return true;
  return properties.reduce((acc, x) => {
    const target = (`${queryValue(obj, x, '')}`).toLowerCase();
    const needle = (`${value}`).toLowerCase();
    return acc || target.indexOf(needle) >= 0;
  }, false);
};

export const omit = (source, properties) => {
  if (!source) return source;

  if (Array.isArray(source)) {
    const result = JSON.parse(JSON.stringify(source));
    result.forEach((element, index) => {
      result[index] = omit(result[index], properties);
    });
    return result;
  }

  return Object.keys(source)
    .filter(k => properties.indexOf(k) < 0)
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
