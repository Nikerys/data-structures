var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];
  _.extend(newTree, treeMethods);
  return newTree;
};
var treeMethods = {};

treeMethods.addChild = function(value) {
  this.value = value;
  this.children.push(this);
};

treeMethods.contains = function(target) {
//go through the Tree to see if it's value equals target
//if not go into the tree's children, check length, value
//
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].value === target) {
      return true;
    } else {
      this.children[i].value = this;
    }
  }
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
