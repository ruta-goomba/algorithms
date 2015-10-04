// Implementations of stacks

// LINKED LIST IMPLEMENTATION (modified from http://www.thatjsdude.com/interview/linkedList.html)
// A linked list is a linear data structure where each element is a separate object.
// Each element (a node) of a list is comprising of two items - the data and a reference to the
// next node. The last node has a reference of null.
// Rather than storing values using numeric indexes, a linked list stores them by creating links
// between successive elements so that they form a chain. You can only traverse such a list by following
// the links between elements, rather than by specifying an index. The advantage of linked lists is that
// they make removing and re-ordering elements really easy and efficient, i.e. an array is inefficient at
// adding nodes to the front of an array, but linked lists perform this operation well. Likewise, arrays
// are good at finding any node in constant time, but linked lists perform the same operation in linear time.

//Singly Linked List

//one pointer (head) to point the first node of your linked list
function LinkedList(){
  this.head = null;
}

// push to the list

LinkedList.prototype.push = function(val){
    // the new node
    var node = {
       value: val,
       next: null
    }
    // if head node is null, add the new node to head
    if(!this.head){
      this.head = node;
    }
    // else traverse through the linked list until encounter node with next:null
    else{
      var current = this.head;
      while(current.next){
        current = current.next;
      }
      // put the new node at the end of the list
      current.next = node;
    }
}

// pop from the list

LinkedList.prototype.pop = function(){

    // if head node is null, the stack is empty
    if(!this.head){
      console.log('stack is empty');
      return;
    }
     else {
        var current = this.head;
        var previous = this.head;
        // if there is one node only
        if (!current.next){
        	this.head = null;
            console.log('removing last node');
            console.log(current);
            return;
        }
        // if there's more than one node
        // traverse through the linked list until encounter node with next:null
        while(current.next){
           previous = current;
           current = current.next;
        }
        // remove the last node
        console.log('removing a node');
        console.log(current);
        previous.next = null;
    }
}

//Doubly Linked List

function DoublyLinkedList(){
   this.head = null;
}

// push to the list

DoublyLinkedList.prototype.push = function(val){
    // the new node
    var node = {
       value: val,
       next: null,
       previous: null
    }

    // if head node is null, add the new node to head
    if(!this.head){
      this.head = node;
    }
    // else traverse through the linked list until encounter node with next:null
    else{
        var current = this.head;
        var previous = this.head;
        while (current.next){
            previous = current;
            current = current.next;
        }
        // put the new node at the end of the list
        current.next = node;
        // reference the previous node in the new node
        current.next.previous = current;
    }

}

// pop from the list

DoublyLinkedList.prototype.pop = function(){

    // if head node is null, the stack is empty
    if(!this.head){
      console.log('stack is empty');
      return;
    }
    // else traverse through the linked list until encounter node with next:null
    else {
        var current = this.head;
        var previous = this.head;

         // if there is one node only
        if (!current.next){
        	this.head = null;
            console.log('removing last node');
            console.log(current);
            return;
        }
        while(current.next){
           previous = current;
           current = current.next;
        }
        console.log('removing a node');
        console.log(current);
        previous.next = null;
    }
}

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