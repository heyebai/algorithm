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
  let prevNode = fakeHead;
  while (prevNode.next) {
    if (prevNode.next.val === val) {
      prevNode.next = prevNode.next.next;
    } else {
      prevNode = prevNode.next;
    }
  }
  return fakeHead.next;
}
