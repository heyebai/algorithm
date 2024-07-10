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

function removeElements(head: ListNode | null, val: number): ListNode | null {
  const fakeHead = new ListNode(0, head);
  let curr = fakeHead,
    prev = fakeHead;
  while (curr.next) {
    curr = curr.next;
    if (curr.val === val) {
      prev.next = curr.next;
      curr = prev;
    } else {
      prev = curr;
    }
  }
  return fakeHead.next;
}
