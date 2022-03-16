// Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
// A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node.
// If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

// Implement the MyLinkedList class:

// MyLinkedList() Initializes the MyLinkedList object.
// int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
// void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
// void addAtTail(int val) Append a node of value val as the last element of the linked list.
// void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater than the length, the node will not be inserted.
// void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.

class LinkedNode {
  public val: number;
  public next: LinkedNode | null;
  constructor(val?: number, next?: LinkedNode) {
    this.val = val;
    this.next = next;
  }
}

class MyLinkedList {
  private head: LinkedNode | null;
  private tail: LinkedNode | null;
  private size: number;

  constructor() {
    this.size = 0;
    this.head = null;
    this.tail = null;
  }

  get(index: number): number {
    if (index < 0 || index > this.size - 1) {
      return -1;
    }
    let nextIndex = 0;
    let temp = new LinkedNode(0, this.head);
    while (temp.next) {
      if (nextIndex === index) {
        return temp.next.val;
      }
      nextIndex++;
      temp = temp.next;
    }
  }

  addAtHead(val: number): void {
    const temp = new LinkedNode(val, this.head);
    this.head = temp;
    if (!this.tail) {
      this.tail = temp;
    }
    this.size++;
  }

  addAtTail(val: number): void {
    const temp = new LinkedNode(val, null);
    if (!this.tail) {
      this.head = temp;
    } else {
      this.tail.next = temp;
    }
    this.tail = temp;
    this.size++;
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.size) {
      return;
    }
    if (index === 0) {
      this.addAtHead(val);
      return;
    } else if (index === this.size) {
      this.addAtTail(val);
      return;
    }
    let temp = new LinkedNode(0, this.head);
    let nextIndex = 0;

    while (temp.next) {
      if (nextIndex === index) {
        const newNode = new LinkedNode(val, temp.next);
        temp.next = newNode;
        this.size++;
      }
      nextIndex++;
      temp = temp.next;
    }
  }

  deleteAtIndex(index: number): void {
    if (index < 0 || index >= this.size) {
      return;
    }
    if (index === 0) {
      this.head = this.head.next;
      this.size--;
      return;
    }
    let temp = new LinkedNode(0, this.head);
    let nextIndex = 0;
    while (temp.next) {
      if (nextIndex === index) {
        temp.next = temp.next.next ? temp.next.next : null;
        this.size--;
        if (!temp.next) {
          this.tail = temp;
        }
      }
      nextIndex++;
      temp = temp.next;
      if (!temp) {
        break;
      }
    }
    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    }
  }
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */
