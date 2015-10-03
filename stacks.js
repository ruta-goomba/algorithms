// Implementations of stacks

// LINKED LIST IMPLEMENTATION (code by Cho S. Kim)
// A linked list is a linear data structure where each element is a separate object.
// Each element (a node) of a list is comprising of two items - the data and a reference to the
// next node. The last node has a reference of null.
// Rather than storing values using numeric indexes, a linked list stores them by creating links
// between successive elements so that they form a chain. You can only traverse such a list by following
// the links between elements, rather than by specifying an index. The advantage of linked lists is that
// they make removing and re-ordering elements really easy and efficient, i.e. an array is inefficient at
// adding nodes to the front of an array, but linked lists perform this operation well. Likewise, arrays
// are good at finding any node in constant time, but linked lists perform the same operation in linear time.

var makeLinkedList = function() {

  var instanceOfLinkedList = Object.create(methodsOfLinkedList);

  instanceOfLinkedList.head = null;

  instanceOfLinkedList.tail = null;

  return instanceOfLinkedList;
};

var methodsOfLinkedList = {

  add: function(value) {

    var newNode = makeNode(value);

    /*
     * If the list is empty,
     * then assign the new node
     * as the head of the list.
     */
    if (!this.head) {
     this.head = newNode;
    }

    /*
     * If the list contains a
     * tail, then assign the new
     * node as the next node in
     * the list.
     */
    if (this.tail) {
     this.tail.next = newNode;
    }

    /*
     * Assigns the new node as the
     * tail of the list.
     */
    this.tail = newNode;
  },

  remove: function() {

    /*
     * Creates a variable that
     * references the current
     * head of a list.
     */
    var currentNode = this.head;

    /*
     * Assigns the head of the
     * list to the node next to
     * the current head.
     */
    this.head = currentNode.next;

    /*
     * Sets the initial head of
     * the list to null.
     */
    currentNode = null;
  }
};


var makeNode = function(value) {
  /*
   * Creates an object with the
   * two properties of a node.
   */
  var instanceOfNode = {
    data: value,
    next: null
  };

  return instanceOfNode;
};


// ARRAY IMPLEMENTATION

// create stack
var stack = [];

// push to stack
var pushToStack = function(n){
    stack.push(n);
}

// pop from stack
var popFromStack = function(n){
    var i = stack.pop(n);
    console.log(i);
}