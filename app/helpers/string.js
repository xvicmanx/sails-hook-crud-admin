String.prototype.asTitle = function() {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

String.prototype.separateCamel = function() {
  return this.replace(/([a-z])([A-Z])/g, '$1 $2');
};

export default {};
