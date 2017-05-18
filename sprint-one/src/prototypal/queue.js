var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = Object.create(queueMethods);
  
  someInstance.length = 0;
  someInstance.count = 0;
  someInstance.storage = {};
  someInstance.keysInStorage = [];

  return someInstance;
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
  delete this.storage[this.keysInStorage[0]];
  this.keysInStorage.shift();
  return result;
};

queueMethods.size = function() {
  return this.length;
};

