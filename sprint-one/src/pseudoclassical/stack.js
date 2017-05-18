var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,

  this.length = 0;
  this.storage = {};

};



Stack.prototype.push = function(value) {
  this.length++;
  this.storage[this.length] = value;
};

Stack.prototype.pop = function() {
  if (this.length > 0) {
    this.length--;
  }
  var result = this.storage[this.length + 1];
  delete this.storage[this.length + 1];
  return result;
};

Stack.prototype.size = function() {
  return this.length;
};



