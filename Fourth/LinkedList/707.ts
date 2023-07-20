// class ListNode {
//     val:number
//     next:ListNode | null
//     constructor(val?:number, next?:ListNode){
//         this.val=val===undefined ? 0 : val
//         this.next= next===undefined ? null : next
//     }
// }
class MyLinkedList {
  head: ListNode | null;
  tail: ListNode | null;
  length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  get(index: number): number {
    if (index < 0 || index >= this.length) return -1;
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node.val;
  }

  addAtHead(val: number): void {
    const newHead = new ListNode(val, this.head);
    this.head = newHead;
    if (this.length === 0) {
      this.tail = newHead;
    }
    this.length++;
  }

  addAtTail(val: number): void {
    const newTail = new ListNode(val);
    if (this.length === 0) {
      this.head = newTail;
    } else {
      this.tail.next = newTail;
    }
    this.tail = newTail;
    this.length++;
  }

  addAtIndex(index: number, val: number): void {
    if (index < 0 || index > this.length) return;
    if (index === 0) {
      this.addAtHead(val);
    } else if (index === this.length) {
      this.addAtTail(val);
    } else {
      let curr = this.head,
        next = this.head.next;
      for (let i = 1; i < index; i++) {
        curr = curr.next;
        next = next.next;
      }
      curr.next = new ListNode(val, next);
      this.length++;
    }
  }

  deleteAtIndex(index: number): void {
    if (index >= 0 && index < this.length) {
      if (index === 0) {
        this.head = this.head.next;
      } else {
        let curr = this.head.next,
          prev = this.head;
        for (let i = 1; i < index; i++) {
          curr = curr.next;
          prev = prev.next;
        }
        prev.next = curr?.next;
        if (index === this.length - 1) {
          this.tail = prev;
        }
      }
      this.length--;
      if (this.length === 0) {
        this.head = null;
        this.tail = null;
      }
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
