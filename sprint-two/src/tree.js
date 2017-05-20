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
  var childTree = Tree(value);
  this.children.push(childTree);
};

treeMethods.contains = function(target) {
  //check the length of the first children for for loop
  //if target === value, return true
  //else, if it has children, set a variable for its children
  //when it no longer has children, loop stops, and then 
    //recurse second children of the tree

  if (this.value === target) {
    return true;
  }
    
  for (var i = 0; i < this.children.length; i++) {
    if (this.children[i].contains(target)) {
      return true;
    }
  }
  return false;

};


    // console.log('this is value', this.children[i].value);
    // console.log('this is target', target);    
    // console.log('if we found target', this.children[i].value === target);     
    

/*
 * Complexity: What is the time complexity of the above functions?
 */
