var BinarySearchTree = function(value) {
  
  var binaryTree = Object.create(binaryTreeMethods);
  binaryTree.left = null;
  binaryTree.right = null;
  binaryTree.value = value;
  return binaryTree;
};

var binaryTreeMethods = {};
binaryTreeMethods.insert = function(value) {
  if (value < this.value) {
    if (this.left === null) {
      this.left = BinarySearchTree(value);
    } else {
      this.left.insert(value);  
    }
  } else if (value > this.value) {
    if (this.right === null) {
      this.right = BinarySearchTree(value);
    } else {
      this.right.insert(value);
    }
  }
};

binaryTreeMethods.contains = function(value) {
  if (this.value === value) {
    return true;  
  }
  if (value < this.value) {}
  
};

binaryTreeMethods.depthFirstLog = function(value) {
};





/*
 * Complexity: What is the time complexity of the above functions?
 */
