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
  let curr = head,
    next = curr?.next;
  if (!curr || !next) return head;
  const dummyHead = new ListNode(0, head);
  let prev = dummyHead;
  while (curr && next) {
    prev.next = next;
    const tempNext = next.next;
    next.next = curr;
    curr.next = tempNext;
    prev = curr;
    curr = tempNext;
    next = tempNext?.next;
  }
  return dummyHead.next;
}
