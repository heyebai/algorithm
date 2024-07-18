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
// x + y + n(y+z)=2(x+y+m(y+z))
// (n-2m)(y+z)=x+y
// z=x
function detectCycle(head: ListNode | null): ListNode | null {
  let slow = head,
    fast = head;
  while (fast) {
    slow = slow.next;
    fast = fast.next?.next;
    if (slow === fast) {
      break;
    }
  }
  if (!fast) return null;
  let node = head;
  while (node) {
    if (slow === node) {
      return slow;
    }
    node = node.next;
    slow = slow.next;
  }
}
