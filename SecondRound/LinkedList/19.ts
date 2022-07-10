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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  let index = 0;
  const dummyHead = new ListNode(0, head);
  let node = dummyHead,
    prev = dummyHead,
    next = head.next;
  while (node) {
    node = node.next;
    if (index > n) {
      prev = prev.next;
      next = next.next;
    }
    index++;
  }
  prev.next = next;
  return dummyHead.next;
}
