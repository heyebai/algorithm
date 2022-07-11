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
  let meetup: ListNode | null = null;
  while (quick && quick.next) {
    slow = slow.next;
    quick = quick.next.next;
    if (quick === slow) {
      meetup = quick;
      break;
    }
  }
  if (!meetup) return null;
  let newStarter = head;
  while (newStarter) {
    if (newStarter === meetup) {
      return newStarter;
    }
    newStarter = newStarter.next;
    meetup = meetup.next;
  }
  return null;
}
