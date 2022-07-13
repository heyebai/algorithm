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

function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head,
    quick = head;
  while (quick && quick.next) {
    slow = slow.next;
    quick = quick.next.next;
    if (slow === quick) {
      break;
    }
  }
  if (quick === null || quick.next === null) return null;
  let newPointer = head;
  while (slow) {
    if (slow === newPointer) {
      return slow;
    }
    slow = slow.next;
    newPointer = newPointer.next;
  }
  return null;
}
