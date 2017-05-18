var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.count = 0;
  this.length = 0;
  this.keysInStorage = [];
};

Queue.prototype.enqueue = function(value) {
  this.length++;
  this.count++;
  this.storage[this.count] = value;
  //console.log(this);
  this.keysInStorage.push(this.count);
  //console.log(this.keys);
};

Queue.prototype.dequeue = function() {
  if (this.length > 0) {
    this.length--;
  }
  
  var result = this.storage[this.keysInStorage[0]];
  delete this.storage[this.keysInStorage[0]];
  this.keysInStorage.shift();
  return result;
};

Queue.prototype.size = function() {
  return this.length;
};