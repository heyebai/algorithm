class LinkedNode {
  val: number;
  next: LinkedNode;
  constructor(val?: number, next?: LinkedNode | null) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class MyLinkedList {
  head: LinkedNode | null;
  tail: LinkedNode | null;
  size: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
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
    if (!this.head) {
      this.head = new LinkedNode(val);
      this.tail = this.head;
    } else {
      this.head = new LinkedNode(val, this.head);
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
