var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var size = 0;
  var keysInStorage = [];
  var count = 0;
  

  // Implement the methods below

  someInstance.enqueue = function(value) {
    size++;
    count++;
    keysInStorage.push(count);
    storage[count] = value;
  };

  someInstance.dequeue = function() {
    if (size > 0) {
      size--;
    }
    
    var results = storage[keysInStorage[0]];
    keysInStorage.shift();
    delete storage[results];
    return results;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
