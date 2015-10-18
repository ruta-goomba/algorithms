// Implementations of queues

// LINKED LIST IMPLEMENTATION (modified from http://www.thatjsdude.com/interview/linkedList.html)

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

LinkedList.prototype.shift = function(){

    // if head node is null, the queue is empty
    if(!this.head){
      console.log('queue is empty');
      return;
    }
     else {
        var current = this.head;
        this.head = current.next;
        console.log('removing a node')
        console.log(current);
        current = null;
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

DoublyLinkedList.prototype.shift = function(){

    // if head node is null, the queue is empty
    if(!this.head){
      console.log('queue is empty');
      return;
    }
    // else traverse through the linked list until encounter node with next:null
    else {
        var current = this.head;
        this.head = current.next;
        console.log('removing a node')
        console.log(current);
        current = null;
    }
}

// ARRAY IMPLEMENTATION

// create a queue
var queue = [];

// push to queue
queue.push(1);
queue.push(2);

//shift from queue
queue.shift();
queue.shift();




