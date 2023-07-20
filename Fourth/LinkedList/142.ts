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
// 2(x+y) =x+y + n(y+z)
// x+y=ny+nz

function detectCycle(head: ListNode | null): ListNode | null {
  if (!head) return null;
  let slow = head,
    quick = head;
  while (quick) {
    slow = slow.next;
    quick = quick.next?.next;
    if (slow === quick) {
      break;
    }
  }
  if (!quick) return null;
  let secondSlow = head;
  while (secondSlow !== quick) {
    secondSlow = secondSlow.next;
    quick = quick.next;
  }
  return quick;
}
