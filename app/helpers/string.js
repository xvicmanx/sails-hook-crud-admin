/* eslint-disable */
String.prototype.asTitle = function separateCamel () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.separateCamel = function separateCamel () {
  return this.replace(/([a-z])([A-Z])/g, '$1 $2');
};

export default {};
