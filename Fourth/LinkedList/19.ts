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
  let index = 0,
    slow = dummyHead,
    quick = head;
  while (quick) {
    if (index >= n) {
      slow = slow.next;
    }
    quick = quick.next;
    index++;
  }
  slow.next = slow.next?.next;
  return dummyHead.next;
}
