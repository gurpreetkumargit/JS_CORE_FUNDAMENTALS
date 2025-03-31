class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  // add new nodes in list
  append(data) {
    let newNode = new Node(data);
    if (!this.head) {
      // add element when list is empty
      this.head = newNode;
    } else {
      // when list is not empty and we need to add new node in the
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  prepend(data) {
    // add new node in the starting
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  delete(data) {
    if (!this.head) {
      console.log("list is empty");
      return;
    }

    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next !== null) {
      if (current.next.data === data) {
        current.next = current.next.next;
      }
      current = current.next;
    }
  }

  print() {
    let current = this.head;
    let elements = [];
    while (current !== null) {
      elements.push(current.data);
      current = current.next;
    }
    console.log("elements -> ", elements.join(" -> "));
  }

  search(data) {
    let current = this.head;

    let index = 1;
    while (current !== null) {
      if (current.data === data) {
        console.log("data found on index: ", index);
        return true;
      }
      current = current.next;
      index++;
    }
    console.log("No data found: ", data);
    return false;
  }
}

const newLinkedList = new LinkedList();
newLinkedList.append(10);
newLinkedList.append(20);
newLinkedList.prepend(5);

newLinkedList.print();
newLinkedList.search(10);
newLinkedList.search(5);
newLinkedList.search(25);

newLinkedList.delete(10);
newLinkedList.print();
