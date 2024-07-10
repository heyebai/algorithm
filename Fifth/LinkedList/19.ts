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
  const dummyHead = new ListNode(0, head);
  let prev = dummyHead,
    curr = head,
    index = 0;
  while (curr.next) {
    index++;
    curr = curr.next;
    if (index >= n) {
      prev = prev.next;
    }
  }
  if (n > index + 1) {
    return head;
  }
  prev.next = prev.next.next;
  return dummyHead.next;
}
