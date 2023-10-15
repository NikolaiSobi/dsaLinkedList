/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if(!this.head){
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val)
    if(!this.head){
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    if(this.length == 0){
      this.head = newNode;
      this.tail = newNode;
    }
    this.length += 1;
  }

  /** pop(): return & remove last item. */

  pop() {
    let currrentNode = this.head
    let previousNode = currrentNode
    while(currrentNode.next != null){
      previousNode = currrentNode
      currrentNode = currrentNode.next
    }
    previousNode.next = null
    this.tail = previousNode
    this.length -= 1;

    return currrentNode

  }

  /** shift(): return & remove first item. */

  shift() {
    let currentNode = this.head;
    let nextNode = currentNode.next;
    this.head = nextNode;
    this.length -= 1;

    return currentNode


  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let counter = 0;
    let currentNode = this.head;
    while(counter < idx){
      currentNode = currentNode.next
      counter ++;
    }
    return currentNode.val
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let counter = 0;
    let currentNode = this.head;
    while(counter < idx){
      currentNode = currentNode.next
      counter ++;
    }
    currentNode.val = val
  }

  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let counter = 0
    let currentNode = this.head
    while(counter < idx -1){
      currentNode = currentNode.next;
      counter ++;
    }
    currentNode.val = val;
    this.length += 1;

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let counter = 0;
    let currentNode = this.head;
    while(counter < idx -1){
      currentNode = currentNode.next;
      counter ++;
    }
    returnedNode = currentNode.next;
    currentNode.next = currentNode.next.next;
    this.length -= 1;

    return returnedNode



  }

  /** average(): return an average of all values in the list */

  average() {
    let currentValue = 0
    let currentNode = this.head
    while(currentNode != null ){
      currentValue += currentNode.val;
      currentNode = currentNode.next;
    }
    return currentValue / this.length
    
  }



module.exports = LinkedList;
