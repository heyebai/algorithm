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

// x+y + n(y+z)=2(x+y)
// (n-1)y+nz=x

function detectCycle(head: ListNode | null): ListNode | null {
  let fast = head,
    slow = head;
  while (fast) {
    fast = fast.next?.next;
    slow = slow.next;
    if (fast === slow) {
      break;
    }
  }
  if (!fast) return null;
  let newPointer = head;
  while (newPointer) {
    if (slow === newPointer) {
      return slow;
    }
    newPointer = newPointer.next;
    slow = slow.next;
  }
}
