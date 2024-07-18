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

function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  const dummyHead = new ListNode(0, head);
  let current = head;
  while (current.next) {
    const next = current.next.next;
    const tempHead = dummyHead.next;
    dummyHead.next = current.next;
    current.next.next = tempHead;
    current.next = next;
  }
  return dummyHead.next;
}
