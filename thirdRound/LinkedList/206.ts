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
  if (!head) return head;
  const fakeHead = new ListNode(0, head);
  let curr = head;
  let next = head.next;
  while (next) {
    const temp = next.next;
    next.next = fakeHead.next;
    curr.next = temp;
    fakeHead.next = next;
    next = temp;
  }
  return fakeHead.next;
}
