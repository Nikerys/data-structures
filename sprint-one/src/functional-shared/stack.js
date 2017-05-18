var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstances = {};
  someInstances.length = 0;
  someInstances.storage = {};
  _.extend(someInstances, stackMethods);

  return someInstances;
};

var stackMethods = {};
stackMethods.push = function(value) {
  this.length++;
  this.storage[this.length] = value;
};

stackMethods.pop = function() {
  if (this.length > 0) {
    this.length--;
  }
  var result = this.storage[this.length + 1];
  delete this.storage[this.length + 1];
  return result;
};

stackMethods.size = function() {
  return this.length;
};



