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
  let meet = null;
  while (quick && quick.next) {
    slow = slow.next;
    quick = quick.next.next;
    if (slow === quick) {
      meet = slow;
      break;
    }
  }
  if (!meet) return null;
  let newPointer = head;
  while (newPointer) {
    if (newPointer === slow) {
      return slow;
    }
    newPointer = newPointer.next;
    slow = slow.next;
  }
  return null;
}
