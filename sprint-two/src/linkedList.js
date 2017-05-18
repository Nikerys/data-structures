var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let node = Node(value);
    // if (this.tail.value !== null) {
      
    // }
    this.tail = node;
  };

  list.removeHead = function() {
    // this.head = null;
  };

  list.contains = function(target) {
  //   for (var key in list) {
  //     if (key === target) {
  //       return target;
  //     }
  //   }
  // };
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
