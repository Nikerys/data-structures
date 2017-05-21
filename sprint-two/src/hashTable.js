

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  //what index does is create a value that can be categorized
  //we want to use the index to find its place in the array
  //on that index, if there is no, bucket, create bucket
  //if there is a bucket, push an tuple into that bucket;
  //console.log(index);
  var bucket = this._storage.get(index);
  if (!bucket) {
    this._storage.set(index, []);
    bucket = this._storage.get(index);
  }
  
  var collide = false;
  
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket[i][1] = v;
      collide = true;
    }
  }
  
  if (!collide) {
    bucket.push([k, v]);
  } 

};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      return bucket[i][1];
    }
  }
  return undefined;
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  for (var i = 0; i < bucket.length; i++) {
    if (bucket[i][0] === k) {
      bucket.splice(i, 1);
    }
  }
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


