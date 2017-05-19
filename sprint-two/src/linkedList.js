var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.currentNode = null;
  list.currentNodeContains = null;

  list.addToTail = function(value) {
    let node = Node(value);
 
    if (this.head === null) {
      this.head = node;
    } else {
      this.currentNode = this.head;
      while (this.currentNode.next) {
        this.currentNode = this.currentNode.next;
      }
      this.currentNode.next = node;
    }
    this.tail = node;
  };

  list.removeHead = function() {

    var result = this.head.value;
    this.head = this.head.next;
    return result;
  };

  list.contains = function(target) {
    if (this.head.value === target) {
      return true;
    }
    
    this.currentNodeContains = this.head;
    while (this.currentNodeContains.value) {
      if (this.currentNodeContains.value === target) {
        return true;
      } else if (this.currentNodeContains.next === null) {
        return false;
      } else {
        this.currentNodeContains = this.currentNodeContains.next;
      }
    }
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
