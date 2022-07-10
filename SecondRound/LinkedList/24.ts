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

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;
  const dummyHead = new ListNode(0);
  dummyHead.next = head;
  let curr = dummyHead;
  while (curr && curr.next && curr.next.next) {
    const temp2 = curr.next.next.next;
    const temp3 = curr.next;
    curr.next = curr.next.next;
    curr.next.next = temp3;
    curr.next.next.next = temp2;
    curr = curr.next.next;
  }
  return dummyHead.next;
}
