var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstances = {};
  someInstances.length = 0;
  someInstances.storage = {};
  someInstances.count = 0;
  someInstances.keysInStorage = [];
  _.extend(someInstances, queueMethods);

  return someInstances;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.length++;
  this.count++;
  this.storage[this.count] = value;
  this.keysInStorage.push(this.count);
};

queueMethods.dequeue = function() {
  if (this.length > 0) {
    this.length--;
  }
  var result = this.storage[this.keysInStorage[0]];
  this.keysInStorage.shift();
  delete this.storage[result];
  return result;
};

queueMethods.size = function() {
  return this.length;
};




