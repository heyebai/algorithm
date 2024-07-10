class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = !!val ? val : 0;
    this.next = next === undefined ? null : next;
  }
}

/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
  const dummyHead = new ListNode(0, head);
  let curr = head,
    prev = dummyHead;
  while (curr && curr.next) {
    const temp = curr.next;
    curr.next = curr.next.next;
    temp.next = curr;
    prev.next = temp;

    prev = curr;
    curr = curr.next;
  }
  return dummyHead.next;
}
