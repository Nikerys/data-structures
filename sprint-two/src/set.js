var Set = function() {
  var set = Object.create(setPrototype);
  set.storage = []; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  //An .add() method, takes any string and adds it to the set
  this.storage.push(item);
};

setPrototype.contains = function(item) {
  /* .contains() method, takes any string and returns 
  a boolean reflecting whether it can be found in the set */
  var result = false;
  _.forEach(this.storage, function(name) {
    console.log(name);
    if (name === item) {
      result = true;  
    }
  });
  return result;
};

setPrototype.remove = function(item) {
  //A .remove() method, takes any string and removes it from the set, if present
  this.storage = _.filter(this.storage, function(name) {
    return name !== item;
  });
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
