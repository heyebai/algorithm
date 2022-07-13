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
  if (!head) return head;
  const dummyHead = new ListNode(0, head);
  let prev = dummyHead,
    next = head.next,
    curr = head;
  let index = 0;
  while (curr) {
    index++;
    if (index > n) {
      prev = prev.next;
      next = next.next;
    }
    curr = curr.next;
  }
  prev.next = next;
  return dummyHead.next;
}
